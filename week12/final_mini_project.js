const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mernlab');

const Student = mongoose.model("Student",{
name:String,
age:Number
});

app.post('/register', async (req,res)=>{
await Student.create(req.body);
res.send("Student Registered");
});

app.get('/students', async (req,res)=>{
const data = await Student.find();
res.json(data);
});

app.listen(3000);