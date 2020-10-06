import IRepository, { FilterFunction } from "./IRepository";

interface HasID {
    id: string
}

const compareObjs = <T>(a: T, b: T) => {
    for (let key in a) {
        if (a[key] !== b[key]) {
            return false
        }
    }
    return true
}

class FileRepository<T extends HasID> implements IRepository<T> {

    constructor(private data: Array<T> = []) {
        this.data = data;
    }

    create(newItem: T): Promise<{}> {
        return new Promise((resolve, reject) => {

            // if the object is already in the database, return the existing ID
            let existing = this
                            .data
                            .find(item => compareObjs(newItem, item));

            if (existing) {
                return resolve({
                    status: "ok",
                    message: `Item already exists in the database`,
                    id: existing.id
                })
            }
            if (this.validate(newItem)) {
                let newId = this.data.length;
                this.data.push({...newItem, id: newId})

                resolve({
                    status: "ok",
                    message: `Item successfully created and given id = ${newId}`,
                    id: newId
                });
            }

            reject({
                status: "error",
                message: `Failed to validate ${newItem}`
            })
        })
    }

    validate(newItem: T): boolean {
        if (Object.keys(newItem).includes("id")) return false;

        return true;
    }

    getById(id: string): Promise<T> {
        return new Promise((resolve, reject) => {
            let query = this.data.find(item => item.id === id);
            if (!query) {
                reject({
                    status: "error",
                    message: "Could not find by "
                })
            } else {
                resolve(query);
            }
        })
    }

    getAll(): Promise<Array<T>> {
        return new Promise(resolve => {
            resolve(this.data);
        })
    }

    find(filterFunctions: Array<FilterFunction<T>>): Promise<Array<T>> {
        return new Promise(resolve => {
            resolve(this.data
                        .filter((...args) => {
                            return filterFunctions
                                        .map(p => p.apply(p, args))
                                        .includes(true)
                                    }))
        })
    }

    update(id: string, updatedObject: T): Promise<{}> {
        return new Promise((resolve, reject) => {
            if (!this.data.map(item => item.id)) {
                return reject({
                    status: "error",
                    message: `Could not update: id = ${id} was not found`
                })
            }

            if (!this.validate(updatedObject)) {
                return reject({
                    status: "error",
                    message: `Could not update: Object not valid => ${JSON.stringify(updatedObject)}`
                })
            }

            let existingObject = this.data.find(item => item.id === id);
            let index = this.data.indexOf(existingObject as T);
            this.data[index] = updatedObject;

            return resolve({
                status: "success",
                message: `Updated object with id = ${id}`
            });
        })
    }

}

export default FileRepository;