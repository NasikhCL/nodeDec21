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

exports.getProducts = async(req,res)=>{
    try{
        const products = await Product.find();
        console.log('products are : ', products);
        if(products){
            return res.status(200).json({message:"products fetch sucessfully", products: products})
        }else{

            // await Product.create(req.body)
            return res.status(400).json({message:"no product found"})
        }

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"internal server error"
        })
    }
}

exports.getProductById = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(400).json({ message: "No product found" });
      }
      return res.status(200).json({ product: product });
    } catch (err) {
      return res
        .status(500)
        .json({ error: err, message: "Internal Server Error" });
    }
  };


  exports.deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        return res.status(400).json({ message: "No product found for Deletion" });
      }
      return res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ error: err, message: "Internal Server Error" });
    }
  };

  

  exports.updateProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const updatedProduct = await Product.findByIdAndUpdate(productId, req.body);
      if (!updatedProduct) {
        return res
          .status(400)
          .json({ message: "Product updation failed/Invalid Id" });
      }
      return res.status(200).json({ message: "Product updated successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ error: err, message: "Internal Server Error" });
    }
  };

  
exports.updateQuantity = async (req, res) => {
    try {
      const productId = req.params.id;
      const { quantityDecrease } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(productId, {
        $inc: { quantity: -quantityDecrease }
      });
      if (!updatedProduct) {
        return res
          .status(400)
          .json({ message: "Quantity updation failed/Invalid Id" });
      }
      return res.status(200).json({ message: "Quantity updated successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ error: err, message: "Internal Server Error" });
    }
  };