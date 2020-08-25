// Requiring our models and passport as we've configured it
const db = require("../models");
const { Op } = require("sequelize");

module.exports = function (app) {

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
            }).then(function (data) {
                res.json(data);
            });
    });

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
            }).then(function (data) {
                res.json(data);
            });
    });

    app.post("/api/new", (req, res) => {
        db.Couple.create({
            name1: req.body.name1,
            name2: req.body.name2,
            compatability: req.body.compatability
        })
            .then(function (newCouple) {
                res.json(newCouple)
            })
    });
};
