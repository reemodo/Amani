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
    static async getUserUniversity(userId){
        const user = await User.findById(userId)
        return user.universityName
    }
}

module.exports = userCollManager