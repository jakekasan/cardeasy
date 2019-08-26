module.exports = {
    index: ({ req, res }) => {
        // home page!
        res.render("index");
    },
    faq: ({ req, res }) => {
        res.render("faq");
    }
}