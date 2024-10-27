const build = require("./index")
console.log(build.add(9, 10), build.Sub(10, 3))

//different Type of file Importations
const { add, Sub } = require('./index')
console.log(add(9, 10), Sub(10, 3))


// files Creation  
const fs = require("fs")
const os = require("os")

const memoery = os.machine("data")


console.log(memoery, "memorey")

fs.writeFileSync("./text.js", "var a = 10")

//or
fs.writeFile("./text.txt", "Hello World Async", (err) => { })
const result = fs.readFileSync("./Contacts.txt", "utf-8")
console.log(result, "result")

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
console.log(fs.statSync("./text.txt"), "start object");

