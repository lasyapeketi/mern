const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mernlab');

const Student = mongoose.model("Student",{
name:String,
age:Number
});

app.get('/students', async (req,res)=>{
const data = await Student.find();
res.json(data);
});

app.listen(3000);