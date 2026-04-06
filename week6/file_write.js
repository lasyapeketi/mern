const fs = require('fs');

fs.writeFile('sample.txt','This is MERN Lab File',(err)=>{
if(err) throw err;
console.log("File Written Successfully");
});