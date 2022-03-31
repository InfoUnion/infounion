const express = require('express');
const app = express();
const port = 5000;
const myFunctions = require('./user-services.js');
const unionFunc = require('./union-services.js');

const cors = require('cors');
const e = require('express');


 app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("hello world");
});


app.get('/users', async (req, res) => {
    const name = req.query['name'];
    const job = req.query['job'];
    const username = req.query['username'];
    const password = req.query['password'];
    try{
        result = await myFunctions.getUsers(name,job,username,password);
        res.send(result);
    } catch(error){
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
});

app.get('/unions', async (req, res) => {
    const name = req.query['name'];
    try{
        result = await unionFunc.getUnions(name);
        res.send(result);
    } catch(error){
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
});


app.get('/users/:id', async (req, res) => {
    const id = req.params['id']; //or req.params.id

    try{
        let result = await myFunctions.findUserById(id);
        if (result === undefined || result.length == 0)
            res.status(404).send('Resource not found.');
        else {
            result = {users_list: result};
            res.send(result);
        }
    } catch(error){
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }

    
});


app.post('/users', async (req, res) => {
    const userToAdd = req.body;
    const savedUser = await myFunctions.addUser(userToAdd);
    if (savedUser)
        res.status(201).send(savedUser).end();
    else
        res.status(500).end();
});

app.post('/unions', async (req, res) => {
    const unionToAdd = req.body;
    const savedUnion = await unionFunc.addUnion(unionToAdd);
    if (savedUnion)
        res.status(201).send(savedUnion).end();
    else
        res.status(500).end();
});


app.delete('/users/:id', async (req,res) => {
    const id = req.params['id'];
    if(myFunctions.findUserById(id)=={}){
        res.status(404).send('Resource not found.');
    }else{
        try{
            const userDelete = await myFunctions.deleteUserById(id);
            if(userDelete){
                res.status(204).end();
            }
            else
                res.status(500).end();
            
        }catch(error){
            console.log(error);
            res.status(500).send('An error ocurred in the server.');
        }
        
    }

});

app.delete('/unions/:id', async (req,res) => {
    const id = req.params['id'];
    if(unionFunc.findUnionById(id)=={}){
        res.status(404).send('Resource not found.');
    }else{
        try{
            const unionDelete = await unionFunc.deleteUnionById(id);
            if(unionDelete){
                res.status(204).end();
            }
            else
                res.status(500).end();
            
        }catch(error){
            console.log(error);
            res.status(500).send('An error ocurred in the server.');
        }
        
    }

    
});

app.delete('/users', async (req,res) => {
    const id = req.query['id'];
    if(myFunctions.findUserById(id)=={}){
        res.status(404).send('Resource not found.');
    }else{
        try{
            const userDelete = await myFunctions.deleteUserById(id);
            if(userDelete){
                res.status(204).end();
            }
            else
                res.status(500).end();
            
        }catch(error){
            console.log(error);
            res.status(500).send('An error ocurred in the server.');
        }
        
    }

});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});      