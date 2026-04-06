const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mernlab');

const studentSchema = new mongoose.Schema({
name:String,
age:Number
});

const Student = mongoose.model("Student",studentSchema);

Student.create({
name:"Lasya",
age:19
}).then(()=>{
console.log("Data Inserted");
});