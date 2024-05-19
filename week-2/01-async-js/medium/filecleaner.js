const fs=require("fs")
fs.readFile("t.txt","utf-8",(err,data)=>{
    console.log(data)
    let data1=data.replace(/\s+/g, ' ').trim();
    console.log(data1)
    fs.writeFile("t.txt",data1,(err,data)=>{
        console.log("done")
    })
})