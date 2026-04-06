const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mernlab');

const Student = mongoose.model("Student",{
name:String,
age:Number
});

Student.findOne({ name:"Lasya" })
.then(data=>{
console.log(data);
});