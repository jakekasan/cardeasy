module.exports = {

    newCard: (req, res) => {
        // starting a new card
        res.render("newCard");
    },

    newCard_POST: (req, res) => {
        // handle POST
        console.log(req.body);
        res.send("All good!")
    },

    signCard: (req, res) => {
        // takes you to the signing form
        res.render("signCard");
    },

    signCard_POST: (req, res) => {
        // handle POST
        console.log(req.body);
        res.send("All good!");
    }
}