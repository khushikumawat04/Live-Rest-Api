const mongoose = require("mongoose");

const connetDB = async(uri)=>{
    try {
        await mongoose.connect(uri)
        console.log(`connect to Mongodb database`)


        
    } catch (error) {
        console.log("Error");
        
    }
}


module.exports=connetDB;