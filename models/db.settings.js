/*

    Any config settings for DBs should go here

*/

const Sequelize = require("sequelize");

const { db } = require("./../config/index")(process.env.MODE || "development");

var sequelize = new Sequelize("cardeasy", db.Sequelize );


module.exports = {
    sequelize
}