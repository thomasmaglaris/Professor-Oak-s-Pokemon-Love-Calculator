// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

const db = require("../models");
const { Op } = require("sequelize");

module.exports = function (app) {
  app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/basicFlame.html"));

    db.Couple.findAll(
      {
        order: [
          ["compatability", "DESC"]
        ]
      })
      .then(function (data) {

        var couplesArr = [];

        data.forEach(couple => {
          couplesArr.push(couple);
        });

        res.render("best", {
          couple: couplesArr
        });
      });
  })

  // app.get("/best", function (req, res) {
  //   db.Couple.findAll(
  //     {
  //       where: {
  //         compatability: {
  //           [Op.or]: {
  //             [Op.gt]: 50,
  //             [Op.eq]: null
  //           },
  //         },
  //       },
  //     })
  //     .then(function (data) {

  //       var bestCouples = [];

  //       data.forEach(couple => {
  //         bestCouples.push(couple);
  //       });



  //       res.render("best", {
  //         couple: bestCouples
  //       });
  //     });
  // })

  // app.get("/worst", function (req, res) {
  //   res.redirect("/api/worst");
  // })

}
