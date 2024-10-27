const http = require("http")
const fs = require('fs')
const url = require("url")
const myServer = http.createServer((req, res) => {
    console.log(req.method, "Methods")
    const log = `${Date.now()}:${req.url} New Req Received\n`
    const my_url = url.parse(req.url, true)
    console.log(my_url, "url_my Deleting")

    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("HomePage")
                break;
            case "/about":
                res.end("About Page")
                break;
            default:
                res.end("404 Not Found")
        }
    })
    // res.end("Hello From Server Again")
});
myServer.listen(8000, () => console.log("Server Started!"))