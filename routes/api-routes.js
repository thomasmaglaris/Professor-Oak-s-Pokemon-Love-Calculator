// /api/best and /api/worst show all couples that are above 50% or below 50% respectively
// more proof of concept, but still works

// /api/new is used functionally in the app, adds a new couple to the database

// declarations
const db = require("../models");
const { Op } = require("sequelize");

module.exports = function (app) {
  // finds all couples with a compatability rating above 50%
  app.get("/api/best", function (req, res) {
    db.Couple.findAll(
      {
        where: {
          compatability: {
            [Op.or]: {
              [Op.gt]: 50,
              [Op.eq]: null
            },
          },
        },
      }).then(function (data) { res.json(data); });
  });

  // finds all couples with a compatability rating below 50%
  app.get("/api/worst", function (req, res) {
    db.Couple.findAll(
      {
        where: {
          compatability: {
            [Op.or]: {
              [Op.lt]: 50,
              [Op.eq]: null
            },
          },
        },
      }).then(function (data) { res.json(data); });
  });

  // adds new couple to the db
  app.post("/api/new/", (req, res) => {
    // gets the couple from the front end
    var newCouple = req.body;
    console.log(newCouple);
    console.log(newCouple.name1, newCouple.name2, newCouple.compatibility);

    // creates new couple
    db.Couple.create({
      name1: newCouple.name1,
      name2: newCouple.name2,
      compatability: newCouple.compatibility
    })
      .then(function (newCouple) {
        res.json(newCouple)
      })
  });
};
