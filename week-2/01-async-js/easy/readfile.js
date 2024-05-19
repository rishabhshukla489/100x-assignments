const { log } = require("console")
const fs=require("fs")

console.log("start")
fs.readFile("counter.js","utf-8",(err,data)=>{
    console.log(data)
})
console.log("after");
for(let i=0;i<1000000000000;i++){
    
}