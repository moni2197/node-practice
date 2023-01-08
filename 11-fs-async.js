
const {readFile, writeFile} = require("fs")
//these are nested call backs.

console.log("start");
readFile("./content/first.txt","utf8",(err,res)=>{
    if(err)
    {
        console.log(err);
        return
    }
    const first = res;
    readFile("./content/second.txt","utf8",(err,res)=>{
        if(err){
            console.log(err);
            return
        }
        const second = res
        writeFile("./content/result-async.txt",`Here is the result : ${first}, ${second}`, (err,res)=>{
            if(err){
                console.log(err);
                return
            }
            console.log("Done with this task. ");
        })
    })

})
console.log("Starting next task. ");