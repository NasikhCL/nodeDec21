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

app.post("/createUser", (req, res) => {
    userArr.push(req.body);
    return res.json({ message: "User added successfully" });
  });
  
  app.delete("/deleteUser", (req, res) => {
    const idToBeDeleted = req.body.id;
    const updatedArr = userArr.filter((elem) => elem.id != idToBeDeleted);
    return res.json({ userArr: updatedArr });
  });
  
  app.put("/updateUser", (req, res) => {
    const idToBeUpdated = req.body.id;
    const index = userArr.findIndex((elem) => elem.id == idToBeUpdated);
    userArr[index] = req.body;
    return res.json({ message: "User updated successfully" });
  });
  
  app.get('/getUserById', (req, res) =>{
    const userId = req.body.id;
    const user = userArr.find((elem) => elem.id == userId);
    return res.json({user : user});
  })




app.listen(port, ()=>{
    console.log('server is up and running in port : ' + port)
})