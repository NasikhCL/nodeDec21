const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    Lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{timestamps: true})



const User = mongoose.model('User', userSchema)
module.exports = User;   