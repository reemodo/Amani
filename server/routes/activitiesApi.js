const express = require('express')
const router = express.Router()
const Item = require('../models/Item')
const dbManager = require('./server/DBManager')


router.get('/', async function(req, res){
    try{
        await dbManager.reGenerate()
        res.end()
    }catch(err){
        console.error(err);
        throw new Error(`Failed to generate data`);
        res.status(400).send(err => err)
    }

})

router.get('/get', (req, res) => {
    Item.find({}, function(err, data) {
        console.log(data)
        res.send(data)
    })
});

router.post('/save', (req, res) => {
    let data = req.body
    let newItem = new Item(data)
    newItem.save()
})

module.exports = router
