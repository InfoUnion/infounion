const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const {UnionSchema,SpecificSchema} = require("./union");
const dotenv = require("dotenv");
dotenv.config();

let dbConnection;

function getDbConnection() {
    const uri = process.env.MONGO_URI;

    if (!dbConnection) {
        dbConnection = mongoose.createConnection(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    return dbConnection;
  }

async function getUnions(name){
    const unionModel = getDbConnection().model("Union", UnionSchema);
    let result;
    if (name === undefined){
        result = await unionModel.find();
    }
    else if (name) {
        result = await findUnionByName(name);
    }
    return result;  
}

async function findUnionById(id){
    const unionModel = getDbConnection().model("Union", UnionSchema);    
    try{
        return await unionModel.findById(id);
    }catch(error) {
        console.log(error);
        return undefined;
    }
}

async function addUnion(union){
    const unionModel = getDbConnection().model("Union", UnionSchema);
    try{
        const unionToAdd = new unionModel(union);
        const savedUnion = await unionToAdd.save()
        return savedUnion;
    }catch(error) {
        console.log(error);
        return false;
    }   
}

async function findUnionByName(name){
    const unionModel = getDbConnection().model("Union", UnionSchema);
    return await unionModel.find({'name':name});
}



async function deleteUnionById(id){
    const unionModel = getDbConnection().model("Union", UnionSchema);

    try{
        await unionModel.findByIdAndDelete({_id:id});
        return true;
    }catch(error){
        console.log(error);
        return false;
    }
}


exports.deleteUnionById = deleteUnionById;
exports.getUnions = getUnions;
exports.findUnionById = findUnionById;
exports.addUnion = addUnion;