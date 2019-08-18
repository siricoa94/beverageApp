var express = require("express");
var fs = require("file-system");

var app = express();

var port = process.env.PORT || 8000





app.listen(port, function () {
    console.log(`This is the beverage app listening on ` + port + "!")
});