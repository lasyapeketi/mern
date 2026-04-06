const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mernlab');

const Student = mongoose.model("Student",{
name:String,
age:Number
});

app.put('/update/:name', async (req,res)=>{
await Student.updateOne(
{ name:req.params.name },
{ age:req.body.age }
);
res.send("Data Updated");
});

app.listen(3000);