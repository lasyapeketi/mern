const express = require('express');
const app = express();

app.get('/student', (req,res)=>{
res.json({
name:"Lasya",
branch:"CSE",
year:"3rd Year"
});
});

app.listen(3000);