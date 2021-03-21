const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    _id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    year_of_batch:{
        type:Number,
        required:true
    },
    college_id:{
        type:Number,
        required:true
    },
    skills:{
        type:String,
        required:true
    }
});
const Student = mongoose.model('Student', studentSchema,'student');
module.exports = Student;