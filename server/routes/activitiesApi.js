const express = require('express')
const router = express.Router()
const Item = require('../models/Item')
const dbManager = require('./server/DBManager')
const User = require('../models/user')
const Activity = require('../models/activity')



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

router.post('/:userId', async function(req, res){
    try{
    let activity = req.body

    const userId = req.params.userId
    const userUniversityName = await User.find({_id : userId},{universityName :1 , _id :0})

    const saveMeActivity = {}
    saveMeActivity.userID = userId
    saveMeActivity.universityName = userUniversityName[0].universityName
    saveMeActivity.date = activity.date
    saveMeActivity.location = activity.location 
    saveMeActivity.transportationType = activity.transportationType 
    saveMeActivity.capacity = activity.capacity
    saveMeActivity.activityType = activity.activityType
    saveMeActivity.preferredGender = activity.gender 
    saveMeActivity.participants = []

    let newActivity = new Activity(saveMeActivity)
    newActivity.save()
    res.status(200).end()
    }catch(err){
        console.error(err)
        res.status(400).send(err)
    }
})

module.exports = router
