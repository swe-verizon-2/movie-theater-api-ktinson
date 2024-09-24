const express = require("express");
const app = express();
const { User, Show } = require("../models/index")
const { db } = require("../db/connection")
const router = require('../routes/movies')

const port = 3000;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/movies', router)
module.exports = app;