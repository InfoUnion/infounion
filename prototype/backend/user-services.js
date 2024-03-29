const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb')
const UserSchema = require('./user')
const dotenv = require('dotenv')
dotenv.config()

let dbConnection

function getDbConnection () {
  const uri = process.env.MONGO_URI
  // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  /* client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    }); */

  if (!dbConnection) {
    dbConnection = mongoose.createConnection(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
  return dbConnection
}


async function getUsers(name, job,sub){
    const userModel = getDbConnection().model("User", UserSchema);
    let result;
    if (name === undefined && job === undefined && sub === undefined){
        result = await userModel.find();
    }
    else if (sub){
        result = await findUserBySub(sub);
    }
    else if (name && !job) {
        result = await findUserByName(name);
    }
    else if (job && !name){
        result = await findUserByJob(job);
    }   
    else if (job && name){
        result = await findUserByJobName(name,job);
    } 
    return result;  

}

async function findUserById (id) {
  const userModel = getDbConnection().model('User', UserSchema)
  try {
    return await userModel.findById(id)
  } catch (error) {
    console.log(error)
    return undefined
  }
}


async function addUser(user){
    // userModel is a Model, a subclass of mongoose.Model
    const userModel = getDbConnection().model("User", UserSchema);
    try{
        // You can use a Model to create new documents using 'new' and 
        // passing the JSON content of the Document:

        const userToAdd = new userModel(user);
        //userToAdd['sub'] = userToAdd.generateHash(userToAdd['sub']);
        const savedUser = await userToAdd.save()
        return savedUser;
    }catch(error) {
        console.log(error);
        return false;
    }   

}

async function findUserByName (name) {
  const userModel = getDbConnection().model('User', UserSchema)
  return await userModel.find({ 'username': name })
}

async function findUserBySub(sub){
    const userModel = getDbConnection().model("User", UserSchema);
    //let newer = userModel.validPassword(sub);
    return await userModel.findOne({'sub': sub});
}

async function findUserByJob(job){
    const userModel = getDbConnection().model("User", UserSchema);
    return await userModel.find({'job':job});

}

async function findUserByJobName (name, job) {
  const userModel = getDbConnection().model('User', UserSchema)
  return await userModel.find({ job, name })
}

/*
async function findUserByUserPass(username,password){
    const userModel = getDbConnection().model("User", UserSchema);
    return await userModel.find({'username':username,'password':password});
}*/


async function deleteUserById (id) {
  const userModel = getDbConnection().model('User', UserSchema)

  try {
    await userModel.findByIdAndDelete({ _id: id })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

async function updateUserById (id, name, location, occupation,union) {
  const userModel = getDbConnection().model('User', UserSchema)

  const user = await findUserById(id)
  if (name == undefined) {
    name = user.name
  }
  if (location == undefined) {
    location = user.location
  }
  if (occupation == undefined) {
    occupation = user.occupation
  }
  try {
    const newuser = await userModel.findOneAndUpdate({ _id: id },
      {
        $set: {
          name,
          location,
          occupation

        },
        $push:{union_favorites: union

        }
      }, { new: true })
    return newuser
  } catch (error) {
    console.log(error)
    return false
  }
}

exports.deleteUserById = deleteUserById
exports.getUsers = getUsers
exports.findUserByJob = findUserByJob
exports.findUserById = findUserById
exports.addUser = addUser
exports.updateUserById = updateUserById
