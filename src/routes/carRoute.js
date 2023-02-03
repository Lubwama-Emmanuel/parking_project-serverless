const express = require("express");
const route = express.Router();

const { getCars } = require("../controllers/getCars");

route.get("/", getCars);

module.exports = route;