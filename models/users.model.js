const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: [true, "please add name"],
    },
    email:{
        type:String,
        required: [true, "please add email"],
    },
    password:{
        type:String,
        required: [true, "please add password"], 
    }
},{
    Timestamp : true
})

module.exports = mongoose.model("users", userSchema);