const http = require('http');

const server = http.createServer();

server.on('request',(req, res)=>{
    console.log("Server is running");
})

server.listen(5000);