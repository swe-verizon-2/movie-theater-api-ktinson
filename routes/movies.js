const express = require("express");
const router = express.Router()
const { User, Show } = require("../models/index")
const {check, validationResult} = require('express-validator')
router.get('/', async (req, res) =>{
    const arr =[]
    let result = await User.findAll()
    let results = await Show.findAll()
    arr.push({users: result},{shows: results})
    res.json(arr)
})
router.get('/users', async (req, res) =>{
    let result = await User.findAll()
    res.json(result)
})
router.get('/shows', async (req, res) =>{
    let result = await Show.findAll()
    res.json(result)
})
module.exports = router