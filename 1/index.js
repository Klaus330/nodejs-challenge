var http = require('http')
var fs = require('fs')


var port = 8081
var host = "127.0.0.1"

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': "application/json"})

    let jsonRespnse = {
        status: 200,
        message: 'sucess',
        result: ['cat', 'dog', 'lizard'],
        code: 2000
    }

    res.write(JSON.stringify(jsonRespnse))

    res.end()
})


server.listen(port, host, (error) => {
    if(error) {
        return console.error("Error occured: ", error)
    }

    console.log("server is listening on port ", port)
})