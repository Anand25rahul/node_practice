const http = require("http")

const server = http.createServer((req,res)=>{
if (req.url="/") {
    res.setHeader("content-type","text/html")
    res.write("<h1>I am Rahul Anand 1234</h1>")
    res.end();
}
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`PORT ${PORT}`)
})