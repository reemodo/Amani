const express = require('express')
const router = express.Router()
const DBManager = require('../DBManager')
const User = require('../models/user')
const Activity = require('../models/activity')
const activityCollManager = require('../collections-manager/activityCollManager')

const consts = require('../../config')
const userCollManager = require('../collections-manager/userCollManager')
const Utilities = require('../utility')


router.get('/DBgenerator',Utilities.authenticateToken, async function(req, res){
    try{
        await DBManager.reGenerate()
        res.end()
    }
    catch(err){
        console.error(err);
        res.status(400).send(err => err)
    }
})


router.get('/myActivities/:userId',Utilities.authenticateToken, async function(req, res) {
    try {
        const userId = req.params.userId
        const activities = await activityCollManager.myActivity(userId)
        res.send(activities)
    } 
    catch (error) {
        res.status(400).send(error)
    }
})

router.post('/:userId',Utilities.authenticateToken , async function(req, res){
    try{
        const userId = req.params.userId
        const userData = await userCollManager.getUserUniversityAndGender(userId)
        let preferredGender = "un"
        if(req.body.gender === "true"){
            preferredGender = userData.gender
        }
        const saveMeActivity = {...req.body ,userId,universityName: userData.universityName ,preferredGender: preferredGender}
        await activityCollManager.saveActivity(saveMeActivity)
        res.status(200).end()
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/transportations',Utilities.authenticateToken , async function(req, res){
    try{
        res.status(200).send(consts.transportations)
    }
    catch(err){
        res.status(400).send(error)
    }
})

router.delete('/:activityId',Utilities.authenticateToken , async function(req, res){
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



router.patch('/:activityId',Utilities.authenticateToken , async function(req, res){
    try{
        const activityId = req.params.activityId
        const capacity = req.body.capacity
        await activityCollManager.updateCapacity(activityId, capacity)
        res.status(200).end()
    }
    catch(err){
        console.error(err);
        res.status(400).send(err => err)
    }
})


router.get('/:userId',Utilities.authenticateToken , async function(req, res) {
    try {
        const userId = req.params.userId
        const userData = await userCollManager.getUserUniversityAndGender(userId)
        const {transportationType, specificGender, date, activityType, location} = req.query
        let preferredGender = undefined
        if(specificGender === "true"){
            preferredGender =userData.gender
        }
        else{
            preferredGender = { $in: ['un', userData.gender] }
        }
        const activities = await activityCollManager.filteredActivities(userId,transportationType, preferredGender, date, activityType, location, userData.universityName)
        res.send(activities)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/university/:userID',Utilities.authenticateToken , async function(req, res){
    try{
    const userId = req.params.userID
    const userUniversity = await userCollManager.getUserUniversity(userId)
    res.status(200).send(userUniversity)
    }catch(err){
        res.status(400).send(err)
    }
})

router.get('/',Utilities.authenticateToken , async function(req, res) {
    try {
        const activities = await activityCollManager.getActivities()
        res.send(activities)
    }
    catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router
