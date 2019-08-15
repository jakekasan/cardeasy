/*

Loads usersession (if any) into the

*/

const User = require("./../models/user.model");

module.exports = (req, res, next) => {
    /*


    */

    // get cookie
    if (req.cookie) {
        let {id} = req.cookie;
    } else {
        User.new
    }
}