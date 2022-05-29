const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const CommentSchema = require("./comment");
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

async function getComments(user,union){
    const commentModel = getDbConnection().model("Comment", CommentSchema);
    let result;
    if(user){
        result = await findCommentByUserId(user);
    }
    else if (user === undefined && union === undefined){
        result = await commentModel.find();
    }
    else if (union) {
        result = await findCommentByUnionId(union);
    }
     
    return result;  
}

async function findCommentById(id){
    const commentModel = getDbConnection().model("Comment", CommentSchema);    
    try{
        return await commentModel.findById(id);
    }catch(error) {
        console.log(error);
        return undefined;
    }
}

async function addComment(Comment){
    // userModel is a Model, a subclass of mongoose.Model
    const commentModel = getDbConnection().model("Comment", CommentSchema);
    try{
        // You can use a Model to create new documents using 'new' and 
        // passing the JSON content of the Document:
        const commentToAdd = new commentModel(Comment);
        const savedComment = await commentToAdd.save()
        return savedComment;
    }catch(error) {
        console.log(error);
        return false;
    }   
}

async function findCommentByUnionId(union){
    const commentModel = getDbConnection().model("Comment", CommentSchema);
    return await commentModel.find({'union_id':union});
}

async function findCommentByUserId(user){
    const commentModel = getDbConnection().model("Comment", CommentSchema);
    return await commentModel.find({'user_id':user});
}

async function deleteCommentById(id){
    const commentModel = getDbConnection().model("Comment", CommentSchema);

    try{
        await commentModel.findByIdAndDelete({_id:id});
        return true;
    }catch(error){
        console.log(error);
        return false;
    }
}
//edit this still
async function updateCommentById(id,commentS,rating){
    const commentModel = getDbConnection().model("Comment", CommentSchema);
    
    const comment = await findCommentById(id);
    if(commentS == undefined){
        commentS = comment.comment;
    }
    if(rating == undefined){
        rating = comment.rating;
    }
    try{
        const newComment = await commentModel.findOneAndUpdate({_id: id},
            {
                $set:{
                    comment: commentS,
                    rating: rating
                
                }
            },{new: true});
        return newComment;
    }catch(error){
        console.log(error);
        return false;
    }
}

exports.deleteCommentById = deleteCommentById;
exports.getComments = getComments;
exports.findCommentById = findCommentById;
exports.findCommentByUserId = findCommentByUserId;
exports.findCommentByUnionId = findCommentByUnionId;
exports.addComment = addComment;
exports.updateCommentById = updateCommentById;