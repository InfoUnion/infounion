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

async function getUnions(name,postalCode){
    const unionModel = getDbConnection().model("Union", UnionSchema);
    let result;
    if (name === undefined && postalCode === undefined){
        result = await unionModel.find();
    }
    else if (name) {
        result = await findUnionByName(name);
    }
    else if (postalCode) {
        result = await findUnionByPostal(postalCode);
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

async function findUnionByPostal(postalCode){
    const unionModel = getDbConnection().model("Union", UnionSchema);
    return await unionModel.find({'address.postalCode': postalCode});
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

async function updateUnionById(id,name,address,description,member_count,industry,year_founded,website){
    const unionModel = getDbConnection().model("Union", UnionSchema);
    
    const union = await findUnionById(id);
    if(name == undefined){
        name = union.name;
    }
    if(address == undefined){
        address = union.location;
    }
    if(description == undefined){
        description = union.description;
    }
    if(member_count == undefined){
        member_count = union.member_count;
    }
    if(industry == undefined){
        industry = union.industry;
    }
    if(year_founded == undefined){
        year_founded = union.year_founded;
    }
    if(website == undefined){
        website = union.website;
    }

    try{
        const newunion = await unionModel.findOneAndUpdate({_id: id},
            {
                $set:{
                    name: name,
                    address: address,
                    description: description,
                    member_count: member_count,
                    industry: industry,
                    year_founded: year_founded,
                    website: website
                
                }
            },{new: true});
        return newunion;
    }catch(error){
        console.log(error);
        return false;
    }
}


exports.deleteUnionById = deleteUnionById;
exports.getUnions = getUnions;
exports.findUnionById = findUnionById;
exports.addUnion = addUnion;
exports.updateUnionById = updateUnionById;
exports.findUnionByName = findUnionByName;
