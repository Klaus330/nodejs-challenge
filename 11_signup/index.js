var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var crypto = require('crypto')
var { MongoClient } = require('mongodb')
var uri = 'mongodb://localhost:27017/demo_db'
const dbClient = new MongoClient(uri)
dbClient.connect();
const db = dbClient.db('demo_db')
var app = express();


var hash = (value, salt) => {
    var hmac = crypto.createHmac('sha512', salt)

    let data = hmac.update(value)

    return data.digest('hex')
}


app.post('/sign_up', (req, res) => {

    let data = {
        name: req.body.name,
        email: req.body.email,
        pass: hash(req.body.password, '123213')
    }

    db.collection('details').insertOne(data)

    console.log("[SERVER] data: ", data);
    res.set({
        'Access-Control-Allow-Origin': '*'
    });

    return res.redirect('/public/success.html')
})

app.get('/', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    });

    return res.redirect('/public/index.html')
})


app.use('/public', express.static(__dirname + '/public'))
app.use(express.json())
app.use(bodyParser)
app.use(bodyParser.urlencoded({
    extended: true
}))

app.listen(3000, ()=>{
    console.log("server listening")
})

