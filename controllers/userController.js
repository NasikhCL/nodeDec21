const User = require('../models/User');


exports.signup = async (req, res)=>{


    //in req.body, we get the user data
    console.log(req.body)

    const newUser =await User.create(req.body)
    console.log(newUser)



} 