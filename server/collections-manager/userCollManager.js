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
    static async getUserUniversityAndGender(userId){
        const user = await User.findById(userId)
        return {universityName : user.universityName,gender : user.gender}
    }
    static async saveUser(user){
        const lastUser = await userCollManager.findTheLastUser()
        const newUser = new User({
            _id: (parseInt(lastUser[0]._id, 10) + 1).toString(),
            ...user
        })
        await newUser.save()
        return newUser
    }
    static async findTheLastUser(){
        const user = await User.find({}).sort({ _id: -1 }).limit(1)
        return user
    }
}

module.exports = userCollManager