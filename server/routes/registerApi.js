const express = require('express')
const router = express.Router()
const User = require('../models/user')
const userCollManager = require('../collections-manager/userCollManager')

router.post('/', async function(req, res){
    try{
        const userData = req.body
        await userCollManager.saveUser(userData)
        console.log(userData)
        res.status(200).end()
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
