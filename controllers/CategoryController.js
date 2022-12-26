const Category = require('../models/Category');


exports.createCategory = async(req, res)=>{
    try{
        const category = await Category.findOne({name: req.body.name})
        if(category){
            return res.status(400).json({message:"category already exist"})

        }
        await Category.create(req.body)
        return res.status(200).json({message: "category created sucessfully"})
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"internal server error"
        })
    }
}


exports.getCategories = async (req, res)=>{
    try{
        const category = await Category.find({
            isActive: true
        });
        if(!category){
            return res.status(400).json({message: "no categories found"})

        }else{
            return res.status(200).json({message: "category found", categories: category})
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"internal server error"
        })
    }
}

exports.updateCategory= async(req, res)=>{
    try{
        const categoryId = req.params.id
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, req.body);
        if(!updatedCategory) {
            return res
              .status(400)
              .json({ message: "category updation failed/Invalid Id" });
          }
          return res.status(200).json({ message: "Product updated successfully" });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"internal server error"
        })
    }
}

exports.deleteCategory = async(req, res)=>{
    try{
        const categoryId = req.params.id
        const deletedCategory = await Category.findOneAndDelete(categoryId)
        if (!deletedCategory) {
            return res.status(400).json({ message: "No category found for Deletion" });
          }
          return res.status(200).json({ message: "category deleted successfully" });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"internal server error"
        })
    }
}