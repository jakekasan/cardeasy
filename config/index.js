/*


*/

let config = {
    "development":{
        port:8080,
        address:"localhost",
        db: {
            Sequelize: {
                host: "localhost",
                dialect: "sqlite",
                pool: {
                    max: 5,
                    min: 0,
                    idle: 10000
                },
                storage: "./data.db"
            },
            Mongoose: {
                uri: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds157707.mlab.com:57707/cardeasy`
            }
        },
        constants: {
            cookieExpireSeconds: 1000
        }
    }
}



module.exports = (mode) => {
    return config[mode] || config.development
}