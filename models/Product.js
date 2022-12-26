const mongoose = require('mongoose');




const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'   
        },
        price: {
            type: Number,
            require: true
        },
        quantity:{
            type: Number,
            require: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },{timestamps: true} 
)

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product