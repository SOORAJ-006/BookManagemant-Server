const User = require('../models/users.model')



async function createUser(reqBody , password) {
    const {username , email} = reqBody
    const user = await User.create({username , email, password})
    return user
}


async function findOne(email){
    const user = await User.findOne({email})
    return user
}

module.exports = {createUser , findOne}