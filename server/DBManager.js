class DBManager{
    connectToDB(){
        mongoose.connect("mongodb://127.0.0.1:27017/Amani-DB")
            .catch((err)=> console.log(err))
    }
}