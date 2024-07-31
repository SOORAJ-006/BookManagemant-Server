const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name:{
        type: String,
      required: [true, "please add name"],
    },
    description: {
        type: String,
      required: [true, "please add description"],
    },
    price: {
        type: String,
      required: [true, "please add price"],
    },
    author: {
        type: String,
        required: [true, "please add author"],
    },
    language: {
        type: String,
      required: [true, "please add language"],
    },
    published_year: {
        type: String,
      required: [true, "please add year"],
    },

},{
    Timestamp : true
})

module.exports = mongoose.model("books", bookSchema);