const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collegeSchema= new Schema({
    _id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    year_founded:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    courses:{
        type:String,
        required:true
    }

});

const College = mongoose.model('College',collegeSchema,'college');

module.exports = College;