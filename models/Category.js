const mongoose = require('mongoose');




const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        description:{
            type: String,
            require: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },{timestamps: true} 
)

const Category = mongoose.model('Category', categorySchema);

module.exports = Category