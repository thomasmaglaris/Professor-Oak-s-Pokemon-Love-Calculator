// / shows the index page, /all shows all the scores rendered in a table

// declarations
const path = require("path");
const db = require("../models");
const { Op } = require("sequelize");

module.exports = function (app) {
  // shows the index page using handlebars
  app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/basicFlame.html"));
    res.render("index");
  })

  // shows all results using handlebars and a html table
  app.get("/all", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/basicFlame.html"));

    // finds all couples and orders them by compatability in a descending order
    db.Couple.findAll(
      {
        order: [
          ["compatability", "DESC"]
        ]
      })

      // show to the screen using handlebars 
      .then(function (data) {

        var couplesArr = [];

        data.forEach(couple => {
          couplesArr.push(couple);
        });

        res.render("scores", {
          couple: couplesArr
        });
      });
  })
}
