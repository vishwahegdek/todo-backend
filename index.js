const express = require('express');

const app = express()

const types = require("types.js");
app.use(express.json());

app.post('/todo',(req,res)=>{
    res.send("hello world")
})

app.get("/todos",(req,res)=>{

})

app.put("/completed",(req,res)=>{

})
app.listen(3000,()=>{
    console.log('listening on port 3000')
});