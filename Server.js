const express = require('express')
const connectDb = require('./config/connectDB')
const app = express()
const dotenv = require('dotenv').config()

const port = process.env.PORT || 3000

connectDb()
app.use(express.json())

app.use('/books' , require('./routes/books.route'))
app.use('/users', require('./routes/users.routes'))

app.listen(port , ()=>{
    console.log(`server running on ${port}`)
})