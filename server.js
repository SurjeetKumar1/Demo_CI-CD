import express from "express";
import sum from "./sum.js";
const app=express();

const port=8000;
app.listen(port,()=>{
    console.log("server is listing on port ", )
})

app.get("/home",(req,res)=>{
    res.send({message:"Hii i am surjeet"})
})

app.get("/getsum/:a/:b",async(req,res)=>{
   const {a,b}=req.params;
   res.send({
    ans:sum(parseInt(a),parseInt(b))
   })
})