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
// router.put('/users/{User_id}/shows/{Show_id}', async (req, res) =>{
//     const result =[]
//     let resultUser = await User.findByPk(req.params.id)
//     let resultShow = await Show.findByPk(req.params.id)
//     result.push({user: resultUser, shows: resultShow})
//     res.json(result)
// })
router.put('/users/:id/shows/:id', async (req, res) =>{
    const result =[]
    let resultUser = await User.findByPk(req.params.id)
    let resultShow = await Show.findByPk(req.params.id)
    result.push({user: resultUser, shows: resultShow})
    res.json(result)
})
router.get('/shows/:id', async (req, res) =>{
    let result = await Show.findByPk(req.params.id)
    res.json(result)
})
module.exports = router