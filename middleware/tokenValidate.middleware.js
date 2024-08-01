
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/users.model')

const validateToken = asyncHandler(async(req,res,next)=>{
    console.log(req.cookies);
    let token;
    
    if(req.cookies && req.cookies.token){

        token = req.cookies.token

        try {
            // verifying the token
            const decoded = jwt.verify(token , process.env.SECRET_TOKEN)

            // get user from the token
            req.user = await User.findById(decoded.id)
            next()
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({message : "token validation not successfull"});
            } else {
                return res.status(401).json({ message: 'Invalid token' });
            }
        }
    }
    else{
        res.status(401).json({message : "redirecting to signin"})
    }
})

module.exports = validateToken;