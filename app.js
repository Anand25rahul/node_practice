// const add = require("./math");

// console.log(add(5,4));

// console.log(__dirname)
// console.log(__filename)

// const os = require("os")

// console.log(os.platform())
// console.log(os.userInfo())
// console.log(os.arch())
// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.uptime())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.networkInterfaces())
// console.log(os.cpus())
// console.log(os.tmpdir())
// console.log(os.type())


const fs = require("fs")
const path = require("path")

const filename = "test.txt"
const filePath = path.join(__dirname,filename)
// console.log(__dirname)

// const writeFile = fs.writeFileSync(
//     filePath,
//     "This is the initial Data, Updated",
//     "utf-8"
// )
// console.log(writeFile)

// const readFile =fs.readFileSync(filePath,"utf-8")
// console.log(readFile)

// const readFile2 =fs.readFileSync(filePath,)
// console.log(readFile2.toString())

// const updateFile = fs.appendFileSync(
//     filePath,
//     "\nThis is the updated data",
//     "utf-8"
// )
// console.log(updateFile)

// const deleteFile = fs.unlinkSync(filePath)

fs.writeFile(filePath,"This is Initial Data", "utf-8",
    (err)=>{
        if (err) console.error(err)
            else console.log("File has been Saved")
    }
)