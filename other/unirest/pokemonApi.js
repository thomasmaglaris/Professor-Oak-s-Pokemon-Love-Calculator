// FILE USED AS AN EXAMPLE TO BE USED IN THE FRONT END

// declaration
var unirest = require("unirest");

// setting id of the pokemon to get
var id = 1;

// request
var req = unirest("GET", `https://pokeapi.co/api/v2/pokemon/${id}`);


// once done, log the url of the sprite to be used
req.end(function (res) {
  if (res.error) throw new Error(res.error);

  var result = res.body.sprites.other;
  console.log(result.dream_world.front_default);
});