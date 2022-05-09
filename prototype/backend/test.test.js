// Kareem Darghous
const myFunctions = require('./user-services.js');

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const UserSchema = require("./user");
const dotenv = require("dotenv");
dotenv.config();

let dbConnection;


function getDbConnection() {
  const uri = process.env.MONGO_URI;
  //const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  /*client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
  });*/

  if (!dbConnection) {
      dbConnection = mongoose.createConnection(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
  }
  return dbConnection;
}

test("Testing get users", async () => {
  const name = "jeff";
  const job = undefined
  const users = await myFunctions.getUsers(name,job);
  expect(users).toBeDefined();
});

test('Testing findUserByName -- success', async () => {
  const name = "charles";
  const result = await myFunctions.findUserByName(name);
  expect(result).toBeDefined
  expect(result).toBeTruthy

});

test('Testing findUserByID -- success', async () => {
  const id = "6345649bf6b835f78b1b465f";
  const result = await myFunctions.findUserById(id);
  //expect(result).toBeDefined();
  expect(result).toBeDefined;
  expect(result).toBeTruthy
});

test('Testing findUserByJob -- success', async () => {
  const job = "jober";
  const result = await myFunctions.findUserByJob(job)
  expect(result).toBeDefined
  expect(result).toBeTruthy


});



test("testing deleting a user by Id -- successful path", async () => {
  const userModel = getDbConnection().model("User", UserSchema);

   const user = {
            "_id": "6229049bf6b835f78b1b465f",
            "username": "jeff",
            "password": "String",
            "name": "Jeff",
            "location": "Massachushets",
            "occupation": "jober",
            "union_favorites": [],
            "comments": [],
            "union_membership": [],
            "__v": 0
        };

  const result = new userModel(user);
  const addedUser = await result.save();
  const deleteResult = await myFunctions.deleteUserById(addedUser._id);
  expect(deleteResult).toBeDefined();
  expect(deleteResult).toBeTruthy();
  expect
});

test("testing adding user -- successful path", async () => {
  const user = {
        
            "_id": "6345649bf6b835f78b1b465f",
            "username": "charles",
            "password": "String",
            "name": "Bill",
            "location": "Massachushets",
            "occupation": "engineer",
            "union_favorites": [],
            "comments": [],
            "union_membership": [],
            "__v": 0
        };

  const result = await myFunctions.addUser(user);
  expect(result).toBeDefined;
  // expect(result.occupation).toBe(user.occupation);
});

//
