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