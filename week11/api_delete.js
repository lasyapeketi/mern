const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mernlab');

const Student = mongoose.model("Student",{
name:String,
age:Number
});

app.delete('/delete/:name', async (req,res)=>{
await Student.deleteOne({ name:req.params.name });
res.send("Data Deleted");
});

app.listen(3000);