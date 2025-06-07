const fs = require("fs")
// const fs = require("fs/promises")  if i write this then no need to write "fs.promises" just write "fs.writeFile"
const path = require("path")

const fileName = "fsPromise.txt"
const filePath = path.join(__dirname,fileName)

const file = __dirname

// fs.promises.readdir(file)
// .then((data)=>console.log(data))
// .catch((err)=>console.error(err))

// fs.promises.writeFile(filePath,"This is my Initial Value", "utf-8")
// .then(console.log("File Created Successfully!"))
// .catch((err)=>console.error(err))

// fs.promises.readFile(filePath,"utf-8")
// .then((data) => console.log(data))
// .catch((err) => console.error(err))

// fs.promises.appendFile(filePath,"\nRahul Anand", "utf-8")
// .then(console.log("File Updated Successfully!"))
// .catch((err)=>console.error(err))

fs.promises.unlink(filePath)
.then(console.log("Delete Successfully!"))
.catch((err) => console.error(err))