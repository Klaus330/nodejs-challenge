var http = require('http')
var fs = require('fs')


var port = 8081
var host = "127.0.0.1"

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': "application/pdf"})

    fs.readFile('bilet.pdf', (err, data) => { 
        if(err) {
            res.json({'status': 'error', msg: err})
        
            return 
        }

        res.write(data)
        res.end()
    })
})


server.listen(port, host, (error) => {
    if(error) {
        return console.error("Error occured: ", error)
    }

    console.log("server is listening on port ", port)
})