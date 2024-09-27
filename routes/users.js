const express = require("express");
const routerU = express.Router()
const { User, Show } = require("../models/index")
const {check, validationResult} = require('express-validator')

routerU.get('/', async (req, res) =>{
    let result = await User.findAll()
    res.json(result)
})
routerU.get('/:id', async (req, res) =>{
    let result = await User.findByPk(req.params.id)
    res.json(result)
})
routerU.get('/:id/shows', async (req, res) =>{
    let user = await User.findByPk(req.params.id)
    let response = await user.getShows()
    res.json(response)
})

routerU.put('/:userId/shows/:showId', async (req, res) =>{
    const {showId, userId} = req.params
    const result =[]
    let resultUser = await User.findByPk(userId)
    let resultShow = await Show.findByPk(showId)
    result.push({user: resultUser, shows: resultShow})
    await resultShow.addUsers(resultUser)
    let response = await resultUser.getShows()
    console.table(response)
    // let consoleUserShows = await User.findAll({include: Show})
    console.table(result)
    //console.log(consoleUserShows)
    res.json(result)
})




module.exports = routerU