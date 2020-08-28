var unirest = require("unirest");

var id = 1;

var req = unirest("GET", `https://pokeapi.co/api/v2/pokemon/${id}`);

req.end(function (res) {
    if (res.error) throw new Error(res.error);

    var result = res.body.sprites.other;
    console.log(result.dream_world.front_default);
});