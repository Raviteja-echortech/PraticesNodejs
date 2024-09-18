const build = require("./index")
console.log(build.add(9, 10), build.Sub(10, 3))



// files Creation  
const fs = require("fs")
fs.writeFileSync("./text.js", "var a = 10")
//or
fs.writeFile("./text.txt", "Hello World Async", (err) => {

})
const result = fs.readFileSync("./Contacts.txt", "utf-8")
console.log(result, "result")
const { add, Sub } = require('./index')
console.log(add(9, 10), Sub(10, 3))
// fs.readFile("./Contacts.txt", "utf-8",(err,result)=>{
//     if(result){
//         console.log(result)
//     }else{
//         console.log(err,"")
//     }
// })
fs.appendFileSync("./text.txt", "\n rahul ramakrishna is here ");
fs.copyFileSync("./text.txt", "./copy.txt")
fs.unlinkSync("./copy.txt")
console.log(fs.statSync("./text.txt"));
