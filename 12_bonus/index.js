var app = require('express')();
const server = require('http').Server(app);
const fs = require('fs')


const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/admin.html')
})



io.on('connection', (socket) => {

    // let rawData = fs.readFileSync('file.json')
    // if(rawData.length > 0)
    // {
    //     let conversation = JSON.parse(rawData)
    //     socket.emit('welcome', { data: conversation })
    // }
    
    socket.on('new', (data) => {
        // let jsonData = fs.readFileSync('file.json')
        // let json = JSON.parse(jsonData)
        // json.push({id: socket.id, msg: data['quote']})
        // fs.writeFileSync('file.json', JSON.stringify(json))

        data['id'] = socket.id
        io.sockets.emit('next', {data: data})
    })

})

server.listen(3000, () => {
    console.log("Server listening at: 3000")
})
