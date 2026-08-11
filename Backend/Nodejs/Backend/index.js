import http from 'http'
import express from 'express'
import cors from 'cors'
const app= express();
const port=8000;
app.use(cors({
    "origin":"http://localhost:5173"
}))

app.use(express.json())
app.get("/",(req, res)=>{

    res.json({name:"Sachin", age:23})
})
app.post("/",(req, res)=>{
    console.log(req.body)

    res.send({success:true})
})

app.listen(port,()=>{
    console.log("Server Is Started")
});