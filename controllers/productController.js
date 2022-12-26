const Product = require('../models/Product');


exports.createProduct = async(req,res)=>{
    try{
        const product = await Product.findOne({name: req.body.name});
        if(product){
            return res.status(400).json({message:"product already exist"})
        }
        await Product.create(req.body)
        return res.status(200).json({message:"product create sucessfully"})

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"internal server error"
        })
    }
}