const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/node-db')


const db = mongoose.connection;


db.on('err', ()=>{
    console.log(err, 'error connecting db')
})


db.once('open', ()=>{
    console.log('successfully connected with db');
})


