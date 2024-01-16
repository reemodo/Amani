const express = require('express')
const router = express.Router()
const dbManager = require('../DBManager')
const User = require('../models/user')
const Activity = require('../models/activity')
const activityCollManager = require('../collections-manager/activityCollManager')
const consts = require('../../config')
const userCollManager = require('../collections-manager/userCollManager')

router.get('/', async function(req, res) {
    try {
        const activities = await activityCollManager.getActivities()
        res.send(activities)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:userId', async function(req, res) {
    try {
        const userId = req.params.userId
        const {transportationType, specificGender, date, activityType, location} = req.query
        const userUniversityName = await userCollManager.getUserUniversity(userId)
        const activities = await activityCollManager.filteredActivities(transportationType, specificGender, date, activityType, location, userUniversityName)
        res.send(activities)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/myActivities/:userId', async function(req, res) {
    try {
        const userId = req.params.userId
        const activities = await activityCollManager.myActivity(userId)
        res.send(activities)
    } 
    catch (error) {
        res.status(400).send(error)
    }
})

router.post('/:userId', async function(req, res){
    try{
        const userId = req.params.userId
        const userUniversityName = await userCollManager.getUserUniversity(userId)
        const saveMeActivity = {...req.body ,universityName: userUniversityName }
        const newActivity = await activityCollManager.saveActivity(saveMeActivity)
        res.status(200).end()
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/transportations', async function(req, res){
    try{
        res.status(200).send(consts.transportations)
    }
    catch(err){
        res.status(400).send(error)
    }
})

router.delete('/:activityId', async function(req, res){
    try{
        const activityId = req.params.activityId
        await activityCollManager.deleteActivity(activityId)
        res.status(200).end()
    }
    catch(err){
        console.error(err)
        res.status(400).send(err)
    }
})

router.get('/DBgenerator', async function(req, res){
    try{
        await dbManager.reGenerate()
        res.end()
    }
    catch(err){
        console.error(err);
        res.status(400).send(err => err)
    }
})

module.exports = router
