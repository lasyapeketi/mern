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
res.send("Inserted");
});

app.get('/all', async (req,res)=>{
const data = await Student.find();
res.json(data);
});

app.put('/update/:name', async (req,res)=>{
await Student.updateOne(
{ name:req.params.name },
{ age:req.body.age }
);
res.send("Updated");
});

app.delete('/delete/:name', async (req,res)=>{
await Student.deleteOne({ name:req.params.name });
res.send("Deleted");
});

app.listen(3000);