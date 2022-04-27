const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



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
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user=>user.name.toLowerCase().includes(search));
    }
    else{
        res.send(users);
    }
    res.send(users)
});

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(user=>user.id ==id);
    res.send(user)
});

//from ui//
app.post('/user', (req, res)=>{
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    
    res.send(user);

})

app.listen(port, ()=>{
    console.log('listening to port', port);

})