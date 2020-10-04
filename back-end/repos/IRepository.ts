
export type FilterFunction<T> = (value: T, index?: number, array?: Array<T>) => boolean;

interface IRepository<T> {
    getAll(): Promise<Array<T>>;

    getById(id: string): Promise<T>;

    find(filterFunctions: Array<FilterFunction<T>>): Promise<Array<T>>;

    create(newItem: T): Promise<{}>;

    update(id: string, updatedItem: T): Promise<{}>;

    validate(item: T): boolean;
}

export default IRepository;