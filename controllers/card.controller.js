/*

    controllers/card.controller.js



*/

const Card = require("./../models/card.model");

module.exports = {

    newCard: ({ req, res, next }) => {
        // starting a new card
        res.render("newCard");
    },

    newCard_POST: ({ req, res, next }) => {
        // handle POST
        console.log(req.body);

        Card.create(req.body)
            .then(() => {
                console.log("Success in saving card!");
                res.send("All good!");
            })
            .catch(() => {
                console.log("Failure in saving card!");
                res.send("All bad!");
            })
    },

    signCard: ({ req, res, next }) => {
        // takes you to the signing form

        User.validate(req)
            .then(() => {
                // req url is valid, render signCard
                // TODO: put data from card into signCard
                // so that user can see existing messages
            })
            .catch(() => {
                // invalid url, redirect to 404
            })
        res.render("signCard");
    },

    signCard_POST: ({ req, res, next }) => {
        // handle POST
        console.log(req.body);
        res.send("All good!");
    }
}