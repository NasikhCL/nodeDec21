const jwt = require('jsonwebtoken');


exports.validateJWT = (req, res, next)=>{
    try{
        const token =req.headers['access-token'];
        if(!token){
            return res.status(400).json({message: "JWT token is required to access"})
        }
        jwt.verify(token, req.app.get('secretKey'), function(err, decodedData){
            if(err){
                console.log(err);
                return res.status(400).json({message: err})
            }
            console.log(decodedData);
            req.body.userId = decodedData._id
        })
        // next();
    
    }catch(err){
        console.log(err);
        return res.status(500).json({message: 'internal server error'})
    } 
}