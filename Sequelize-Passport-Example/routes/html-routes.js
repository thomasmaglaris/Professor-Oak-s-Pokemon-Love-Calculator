// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/best", function (req, res) {
        res.redirect("/api/best");
    })

    app.get("/worst", function (req, res) {
        res.redirect("/api/worst");
    })
};
