const mongoose = require("mongoose");

const connectDb = async ()=>{
    try {
        const connect = mongoose.connect(process.env.CONNECTION_STRING)
        console.log('connected')
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDb