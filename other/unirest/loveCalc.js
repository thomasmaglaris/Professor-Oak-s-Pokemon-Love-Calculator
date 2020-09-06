// FILE USED AS AN EXAMPLE TO BE USED IN THE FRONT END

// Declarations
var unirest = require("unirest");

// setting both names
var name1 = "Jason Bourne";
var name2 = "Alice Eve";

// search request
var req = unirest("GET", "https://love-calculator.p.rapidapi.com/getPercentage");

// query
req.query({
  "fname": name1,
  "sname": name2
});

// properties
req.headers({
  "x-rapidapi-host": "love-calculator.p.rapidapi.com",
  "x-rapidapi-key": "a3c8046358mshcd9811161282f87p1b9cd1jsna881f87ab005",
  "useQueryString": true
});

// once done, log result
req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});