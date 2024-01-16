const User = require('../models/user')

class userCollManager{
    static async getUsers(){
        const users = await User.find({})
        return users 
    }
}

module.exports = userCollManager