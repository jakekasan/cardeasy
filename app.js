/*

    app.js

    Entry point.
*/

// globals
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");

// locals
const cardController = require("./controllers/card.controller");
const homeController = require("./controllers/home.controller");

// init app
const app = express();

// middleware
app.use(cookieParser());
app.use(bodyParser());

app.set("view engine", "ejs");

// should I use a seperate router??
app.get("/", (req, res, next) => {
    // home controller
    homeController.index({ req, res, next });
});

app.get("/faq", (req, res, next) => {
    homeController.faq({ req, res, next });
});

app.get("/new", (req, res, next) => {
    cardController.newCard({ req, res, next });
});

app.post("/new", (req, res, next) => {
    cardController.newCard_POST({ req, res, next });
})

app.get("/sign", (req, res) => {
    cardController.signCard({ req, res, next });
});

app.post("/sign", (req, res) => {
    cardController.signCard_POST({ req, res, next });
});

// 404 catch-all
app.use((req, res, next) => {
    res.status(404);
    res.send("404 - not found");
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
})