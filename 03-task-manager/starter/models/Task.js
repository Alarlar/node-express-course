const mongoose = require('mongoose');

// This will set up structure for all documents
const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'must provide name'], // Validator
        trim:true,
        maxlength:[20, 'name can not be more than 20 char']
    },
    completed: {
        type: Boolean,
        // default:false,
    },
}) // Defining structure of document

// Validation 



// Setting up model, representaion of collection, in mongoose is wraper for Schema, Mongoose provide interface to DB
// Using the model will create, delete, create
module.exports = mongoose.model('Task', TaskSchema)
