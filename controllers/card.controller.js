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

    signCard_validate: ({ req, res, next }) => {
        // first validates the user

        User.validate(req)
            .then(() => {
                // req url is valid, render signCard
                // TODO: put data from card into signCard
                // so that user can see existing messages
            })
            .catch(() => {
                // invalid url, redirect to 404
                next()
            })
        res.render("signCard");
    },

    signCard_validate_POST: ({ req, res, next}) => {
        // handle post request

        // if user credentials are valid, give them a cookie and redirect to signCard
    },

    signCard: ({ req, res, next}) => {
        // check for valid cookie

        if (req && req.cookie && req.cookie._id) {
            User.getSession(req)
                .then((data) => {
                    res.render("signCard", {data: data});
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            // if no valid session cookie, redirect to signCard_validate
            res.redirect("signCard");
        }
        
    },

    signCard_POST: ({ req, res, next }) => {
        // handle POST
        console.log(req.body);
        res.send("All good!");
    }
}