const mongoose = require("mongoose")
class DBManager{
    static connectToDB(){
        mongoose.connect("mongodb://127.0.0.1:27017/AmaniDB")
            .catch((err)=> console.log(err))
    }
}
module.exports = DBManager