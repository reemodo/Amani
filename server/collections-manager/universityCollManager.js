const University = require('../models/university')

class universityCollManager{
    static async getUniversities(){
        const universities = await University.find({})
        return universities 
    }
}

module.exports = universityCollManager