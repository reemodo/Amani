const express = require('express')
const router = express.Router()
const User = require('../models/user')
const userCollManager = require('../collections-manager/userCollManager')

router.post('/', async function(req, res){
    try{
        const userData = req.body
        const user = await userCollManager.saveUser(userData)
        if (!user) {
            return res.status(401).send({ message: 'Invalid username or password' });
          }
        const accessToken = generateAccessToken(user);
        res.send({ accessToken , id : user.id });
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
