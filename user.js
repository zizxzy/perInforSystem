const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 10
    },
    age: {
        type: Number,
        required: true,
        max: 25,
        min: 10
    },
    sex: {
        type: String,
    },
    email: {
        type: String
    },
    hobbies: {
        type: [String],
    },
    college: {
        type: String,
    },
    entryDate: {
        type: Date,
        default: Date.now()
    }
});
const Student = mongoose.model('Student',studentSchema);
module.exports=  Student;
