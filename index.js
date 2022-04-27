const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const users = [
    {id:1, name: 'khalek' },
    {id:2, name: 'falek' },
    {id:3, name: 'galek' },
    {id:4, name: 'palek' },
    {id:5, name: 'malek' },
]


app.get('/', (req, res)=>{
    res.send("look, this  is my node")
}); 

app.get('/users', (req, res)=>{
    res.send(users)
});

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(user=>user.id ==id);
    res.send(user)
});

app.listen(port, ()=>{
    console.log('listening to port', port);

})