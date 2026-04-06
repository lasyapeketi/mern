const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mernlab');

const Student = mongoose.model("Student",{
name:String,
age:Number
});

app.post('/add', async (req,res)=>{
await Student.create(req.body);
res.send("Data Inserted");
});

app.listen(3000);