/*


*/

// external
const Sequelize = require("sequelize");

// local
const { sequelize } = require("./db.settings");
const config = require("./../config/index")(process.env.MODE || "development");

var Session = sequelize.define("session", {
    sessionID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    datetimeCreated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    userID: {
        type: Sequelize.UUID,
    }
})

module.exports = {
    get: ({ sessionID }) => {
        console.log("Session Model -> get");

        return new Promise((resolve, reject) => {
            Session.findOne({ where: {sessionID}})
                .then((session) => {
                    let now = Date.now();
                    let sessionDate = Date(session.datetimeCreated);

                    // if the time between the session's datetimeCreated and now is too long, delete the session
                    // and return an empty object
                    if ( ( now - sessionDate ) <=  config.constants.cookieExpireSeconds) {
                        return resolve(session.get({ plain: true }))
                    } else {
                        session.destroy();
                        return reject({})
                    }
                })
        })
    },
    create: ({ userID }) => {
        // create will return a session ID

        console.log("Session Model -> create");

        return new Promise((resolve, reject) => {
            Session.findOrCreate({ userID: userID, datetimeCreated: Date.now() })
                .then(([userSession, created ]) => {
                    if (created) {
                        console.log("A session for this user already existed, refreshing...");
                    } else {
                        console.log("Session already existed")
                    }
                    return resolve(userSession.get({ plain: true }))
                })
        })
    }
}