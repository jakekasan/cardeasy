// import {
//     FAKE_USERS,
//     FAKE_CARDS,
//     FAKE_OCCASIONS,
//     FAKE_DESIGNS
// } from "./fakeData";


// const FakeDataStoreFactory = (data, storeName) => {
//     const getById = (id, session) => {
//         console.log(`${storeName} Store: Received query for id == ${id}, with session = ${session}`);

//         if (id === null || session === null) {
//             return new Promise((resolve, reject) => {
//                 reject({ message: `${storeName} Store: Invalid arguments: id='${id}', session='${session}'`})
//             })
//         }

//         let query = data.find(item => item.id.toString() === id.toString());
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(`${storeName} Store starting timeout`);
//                 if (query !== undefined) {
//                     return resolve(query)
//                 } else {
//                     return reject({
//                         message: `Could not find by id: ${id}`
//                     })
//                 }
//             }, 1000)
//         })
//     }
//     return { getById }
// }

const RealDataStoreFactory = ({ storeName, storeEndpoint }) => {

    const getById = (id, session) => {
        console.log(`${storeName} Store: Received query for id == ${id}, with session = ${session}`);

        if (id === null || session === null) {
            return new Promise((resolve, reject) => {
                reject({ message: `${storeName} Store: Invalid arguments: id='${id}', session='${session}'`})
            })
        }

        return fetch(`${storeEndpoint}?id=${id}&session=${session}`)
            .then(data => {
                let parsedData = data.json();
                if (parsedData === {}) {
                    return {
                        message: `Could not find by id: ${id}`
                    }
                } else {
                    return parsedData
                }
            })
            .catch(err => {
                return {
                    message: err
                }
            })
    }
    return { getById }
}

// const UserStore = FakeDataStoreFactory(FAKE_USERS, "User");
// const CardStore = FakeDataStoreFactory(FAKE_CARDS, "Card");
// const OccasionStore = FakeDataStoreFactory(FAKE_OCCASIONS, "Occasion");
// const DesignStore = FakeDataStoreFactory(FAKE_DESIGNS, "Design");

const UserStore = RealDataStoreFactory({ storeName: "User", storeEndpoint: "/api/user" });
const CardStore = RealDataStoreFactory({ storeName: "Card", storeEndpoint: "/api/card" });
const OccasionStore = RealDataStoreFactory({ storeName: "Occasion", storeEndpoint: "/api/occasion" });
const DesignStore = RealDataStoreFactory({ storeName: "Design", storeEndpoint: "/api/design" });

export {
    UserStore,
    CardStore,
    OccasionStore,
    DesignStore
};