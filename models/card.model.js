let cardData = {
    _id:0,
    dateCreated: Date.now(),
    author: {
        email: "me@mail.com",
        name: "Me "
    },
    contributions: [
        {
            key: "somerandomhash",
            name: "Batman",
            email: "bat@man.org",
            message: null
        },
        {
            key: "somerandomhash",
            name: "Someone",
            email: "some@one.com",
            message: null
        },
        {
            key: "somerandomhash",
            name: "Gob",
            email: "gob@bluth.com",
            message: null
        }
    ]
}

module.exports = {
    create: (data) => {
        return new Promise((resolve, reject) => {
            // new card
            // check if all fields are valid
            // then save and return a reference to the card
            if (true) {
                // all checks passed and card created
                return resolve({
                    message: "card created",
                    data: data
                });
            } else {
                reject({
                    message: "card failed",
                    data: data
                });
            }
        })
    },

    retrieve: (data) => {
        let { id, dateCreated, authorEmail } = data;

        if (id === null & dateCreated === null & authorEmail === null) {
            return {
                status: "bad"
            }
        }
    },

    update: (data,updatedData) => {
        return
    },

    delete: (data) => {
        return
    }
}