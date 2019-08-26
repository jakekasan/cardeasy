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