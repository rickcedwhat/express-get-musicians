const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

app.use(express.json());

app.use(express.urlencoded());

module.exports = app;
