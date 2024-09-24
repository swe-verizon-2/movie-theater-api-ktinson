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
router.get('/users/:id', async (req, res) =>{
    let result = await User.findByPk(req.params.id)
    res.json(result)
})
router.get('/users/:id/shows', async (req, res) =>{
    let result = await User.findByPk(req.params.id)
    res.json(result)
})

router.put('/users/:id/shows/:id', async (req, res) =>{
    const result =[]
    let resultUser = await User.findByPk(req.params.id)
    let resultShow = await Show.findByPk(req.params.id)
    result.push({user: resultUser, shows: resultShow})
    await resultUser.addShow(resultShow)
    let consoleUserShows = await User.findAll({include: Show})
    console.log(result)
    console.log(consoleUserShows)
    res.json(result)
})
router.get('/shows/:id/users/', async (req, res) =>{
    const result =[]
    let resultShow = await Show.findByPk(req.params.id)
    let showUsers =await resultShow.getUsers()
    result.push({shows: resultShow, users: showUsers})
    console.table(result)
    // let consoleUserShows = await Show.findAll({include: User})
    res.json(result)
})
router.put('/shows/:id/available', async (req, res) =>{
    const result =[]
    let resultShow = await Show.findByPk(req.params.id)
    if(resultShow.available === false){
    await resultShow.update({available: true}, {where:{id :req.params.id}})
    res.json(resultShow)
    }else if(resultShow.available === true){
    await resultShow.update({available: false}, {where:{id :req.params.id}})
    res.json(resultShow)
    }else{
        res.send('show not found')
    }
})
router.get('/shows/:id/users/:id', async (req, res) =>{
    const result =[]
    let resultUser = await User.findByPk(req.params.id)
    let resultShow = await Show.findByPk(req.params.id)
    result.push({shows: resultShow, user: resultUser})
    await resultShow.addUser(resultUser)
    let consoleUserShows = await Show.findAll({include: User})
    console.log(result)
    console.log(consoleUserShows)
    res.json(result)
})
router.get('/shows/:id', async (req, res) =>{
    let result = await Show.findByPk(req.params.id)
    res.json(result)
})
router.delete('/shows/:id', async (req, res) =>{
    let result = await Show.destroy({where: {id: req.params.id}})
    res.json(result)
})
module.exports = router