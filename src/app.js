const express = require("express");
const app = express();
const { User, Show } = require("../models/index")
const { db } = require("../db/connection")
const router = require('../routes/shows')
const routerU = require('../routes/users')
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/shows', router)
app.use('/users', routerU)
module.exports = app;