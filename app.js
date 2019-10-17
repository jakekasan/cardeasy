/*

    app.js

    Entry point.
*/

// load ENV variables
require("dotenv").config();

// globals
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");

// locals
//const cardController = require("./controllers/card.controller");
//const homeController = require("./controllers/home.controller");
//const userSessionMiddleware = require("./middleware/userSession.middleware");

// init app
const app = express();

// logging
app.use((req, res, next) => {
    let today = new Date();
    console.log(`${today.toLocaleString()} => Received request to ${req.path}`);
    next();
})

// set public directory
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use(cookieParser());

app.use(bodyParser());

app.all("/",(req, res, next) => {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.all("*", (req, res, next) => {
    res.redirect("/");
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
});