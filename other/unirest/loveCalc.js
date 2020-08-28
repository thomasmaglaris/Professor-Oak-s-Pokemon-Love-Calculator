var unirest = require("unirest");

var name1 = "Jason Bourne";
var name2 = "Alice Eve";

var req = unirest("GET", "https://love-calculator.p.rapidapi.com/getPercentage");

req.query({
    "fname": name1,
    "sname": name2
});

req.headers({
    "x-rapidapi-host": "love-calculator.p.rapidapi.com",
    "x-rapidapi-key": "a3c8046358mshcd9811161282f87p1b9cd1jsna881f87ab005",
    "useQueryString": true
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});