const apiKey = require("./apiKey")
const consts = require("../config")
const jwt = require('jsonwebtoken');
const secretKey = 'my_secret_key';
const filterActivityField = function(date, transportationType, preferredGender){
    const updateFields = {}
    
        if (date){
            updateFields.date = date
        }
        if (transportationType){
            updateFields.transportationType = transportationType
        }
        if (preferredGender){
            updateFields.preferredGender = preferredGender
        }
        return updateFields
}

const getDistance = async function(origin,destination){
    
    const apiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.status === 'OK') {
        const distance = data.rows[0].elements[0].distance.text;
        // const duration = data.rows[0].elements[0].duration.text;
        return distance;
      } else {
        return -1
      }
    } catch (error) {
      console.error('Error:', error);
    }

}


const filterAllActivityField = function(userId,transportationType, specificGender, date, activityType, location, universityName){
    const filter = { }
    if(userId){
        filter.userId =  { $ne: userId }
    }
    if(date){
        filter.date = date
    }
    else{
        filter.date = { $gte: consts.currentDate }
    }
    if (transportationType) {
        filter.transportationType = transportationType
    }
    if (activityType) {
        filter.activityType = activityType
    }
    if (universityName) {
        filter.universityName = universityName
    }
    if(location){
        filter.location = location
    }
    if (specificGender) {
        filter.preferredGender = specificGender
    }
    

    return filter
}

const authenticateToken = function(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(401);
      }
  
      req.user = user;
      next();
    });
  }
module.exports = {filterActivityField, filterAllActivityField, authenticateToken}