const Sequelize = require("sequelize");

var { sequelize } = require("./db.settings");

var User = sequelize.define("user" , {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    dob: {
        type: Sequelize.DATEONLY
    }
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