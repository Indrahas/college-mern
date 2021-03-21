const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require("path");
let College = require('./models/college');
let Student = require('./models/student');
require("dotenv").config({path:"./config.env"})
const app=express()
app.use(cors())
app.use(express.json())
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join( __dirname,'/client/build')))
    // app.get('*',(req,res)=>{
    //     res.sendFile(path.join(__dirname,'client','build','index.html' ))
    // })
}
else{
    app.get('/',(req,res)=>{
        res.send("API running")
    })
}


mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connection to the database is successfull")
    app.listen(process.env.PORT,()=>{
        console.log("Server is listening on port "+process.env.PORT)
    })
})
.catch(()=>console.log("Connection to database is unsuccessful"))

app.get('/states/:state',(req,res)=>{
    const state=req.params.state;
    // console.log(state)
    College.find({state:state})
    .then((colleges)=>{res.json(colleges)})
    .catch(err=>res.status(400).json("Error"+err))
})
app.get('/collegen/:name',(req,res)=>{
    const name=req.params.name;
    // console.log(state)
    College.find({name:name})
    .then((college)=>{res.json(college)})
    .catch(err=>res.status(400).json("Error"+err))
})
app.get('/college/:id',(req,res)=>{
    const id=req.params.id;
    // console.log(id)
    College.findById(parseInt(id))
    .then((college)=>{
        Student.find({college_id:parseInt(id)}).then(data=>
            {
                
                res.json({college:college,students:data})
            }
        )
    })
    .catch(err=>res.status(400).json("Error "+err))
})
app.get('/student/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id)
    Student.findById(parseInt(id))
    .then((student)=>{res.json(student)})
    .catch(err=>res.status(400).json("Error"+err))
})
app.get('/courses/:course',(req,res)=>{
    const course=req.params.course;
    console.log(course)
    College.find()
    .then((colleges)=>{
        var out=[]
        colleges.map(college=>{
            if(college.courses.includes(course)){
                out.push(college)
            }
        })
        res.json(out)})
    .catch(err=>res.status(400).json("Error"+err))
})