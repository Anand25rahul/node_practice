const fs = require("fs/promises")
const path = require("path")


const fileName = "asyncFile.txt"
const filePath = path.join(__dirname,fileName)

// const filePath1 =__dirname

// fs.promises
// .readdir(filePath1)
// .then((data)=>console.log(data))
// .catch((err)=>console.error(err))


// const readFolder = async()=>{
//     try {
//         const res = await fs.promises.readdir(filePath1)
//         console.log(res)
//     } catch (error) {
//         console.error(error)
//     }
// }

// readFolder();

// const writeFile = async ()=>{
//     try {
//       await fs.writeFile(filePath,"This is my Initial Data","utf-8")
//       console.log("File created Successfully")
//     } catch (error) {
//         console.error(error)
//     }
// }

// writeFile();

const readFile = async ()=>{
    try {
      const res = await fs.readFile(filePath,"utf-8")
      console.log(res)
    } catch (error) {
        console.error(error)
    }
}

readFile();