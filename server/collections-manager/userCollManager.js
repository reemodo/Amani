const User = require('../models/user')

class userCollManager{
    static async getUsers(){
        const users = await User.find({})
        return users 
    }
    static async findUserById(id){
        const user = await User.findById(id)
        return user
    }
    
}

module.exports = userCollManager