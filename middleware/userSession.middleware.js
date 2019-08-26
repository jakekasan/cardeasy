/*

Loads usersession (if any) into the

*/

const Session = require("./../models/session.model");

module.exports = (req, res, next) => {
    /*

        If a valid sessionID is in the cookie, add session data to the request object.

    */

    // get cookie
    if (req.cookies && req.cookies.id) {
        Session.get({sessionID: id})
            .then((sessionData) => {
                req._session = sessionData;

                console.log("Session data:", sessionData);
                next();
            })
            .catch(() => {
                next();
            })

    } else {
        next();
    }
}