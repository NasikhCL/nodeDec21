const express = require('express');
const app = express();
const port =8000;
const bodyPaser = require('body-parser');


app.use(bodyPaser.urlencoded({extended: true}));
app.use(bodyPaser.json())

const userArr = [
    {
        id:1,
        name: 'nasik'
    },
    {
        id:2,
        name: 'mahmoo'
    }
]


app.get('/', (req,res)=>{
    res.send('hello world')
})



app.get('/getUsers', (req,res)=>{
    res.json(userArr)
})


app.listen(port, ()=>{
    console.log('server is up and running in port : ' + port)
})