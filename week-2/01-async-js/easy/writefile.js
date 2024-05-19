const { log } = require("console")
const fs=require("fs")
let data1=""
console.log("start")
fs.readFile("counter.js","utf-8",(err,data)=>{
    data1=data+"hsdgjhsdhj"
    fs.writeFile("test.txt",data1,(err,data)=>{
        console.log("done")
    })
    console.log("after");
    fs.readFile("test.txt","utf-8",(err,data)=>{
        console.log(data)
    })
})

