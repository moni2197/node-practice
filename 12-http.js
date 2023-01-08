const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("Welcome to home page")
        res.end()
    }
    else if(req.url === "/admin"){
        res.write("This is admin page")
        res.end()
    }
    else{
    res.end(`
        <h1>Error page</h1>
    `)
    }
})
server.listen(5000)