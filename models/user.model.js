const Sequelize = require("sequelize");

var sequelize = new Sequelize("cardeasy", {
    host: "localhost",
    dialect: "sqlite",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: "./data.db"
});

var User = sequelize.define("user" , {
    id: {
        type: Sequelize.UUID,
        field: ""
    },
    
})


module.exports = {
    validate: (req) => {
        return new Promise((resolve, reject) => {
            // if valid credentials, return list of card info
            User.get(req.user)
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                })
            // if invalid, TODO: ?
        })
    },


}