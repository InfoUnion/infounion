const express = require('express');
const app = express();
const port = 4000;
const myFunctions = require('./user-services.js');

const cors = require('cors');
const e = require('express');

const users = { 
    users_list :
    [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
 }

function ID(){
    const isID = (obj) => obj.id ==result;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    var length = characters.length;
    for(var i =0; i<6; i++){
        result += characters.charAt(Math.random()*length)
    }

    if(users['users_list'].findIndex(isID)==-1){
        return result;
    }
    return ID();
}

 app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/users', async (req, res) => {
    const name = req.query['name'];
    const job = req.query['job'];
    try{
        result = await myFunctions.getUsers(name,job);
    /*users['users_list'];
    
    if(name != undefined){
        result = result.filter((user) => user['name']===name);
        
    }if (job != undefined) {
        result = result.filter( (user) => user['job']===job);
        
    } */
        result = {users_list: result}
        res.send(result);
    } catch(error){
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
});

const findUserByName = (name) => {
    return users['users_list'].filter( (user) => user['name'] === name);
}

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

function findUserById(id) {
    return users['users_list'].find( (user) => user['id'] === id); // or line below
    //return users['users_list'].filter( (user) => user['id'] === id);
}

app.post('/users', async (req, res) => {
    const userToAdd = req.body;
    //userToAdd.id = ID();
    const savedUser = await myFunctions.addUser(userToAdd);
    //addUser(userToAdd);
    //res.send(userToAdd);
    //res.status(201).send(userToAdd).end();
    if (savedUser)
        res.status(201).send(savedUser).end();
    else
        res.status(500).end();
});

function addUser(user){
    users['users_list'].push(user);
}

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
function deleteUser(id){
    users['users_list'] = users['users_list'].filter( (user) => user['id']!=id);
}




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});      