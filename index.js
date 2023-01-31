"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var data_1 = require("./data");
var app = express();
app.use(cors());
app.use(express.json());
app.get("/shoes", function (req, res) {
    return res.status(200).json(data_1.data);
});
app.get("/shoes/:id", function (req, res) {
    var shoeId = req.params.id.toString();
    var shoe = data_1.data.find(function (shoe) { return shoe.id.toString() === shoeId; });
    return res.status(200).json(shoe);
});
app.listen(4000, function () {
    console.log("Listening on port 4000");
});
