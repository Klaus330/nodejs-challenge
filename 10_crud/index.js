

var { MongoClient } = require('mongodb')

var uri = 'mongodb://localhost:27017/demo_db'


const client = new MongoClient(uri)

async function run (){

    try{
        await client.connect()
        console.log("Connected")
        
        await client.db('demo_db').command({ ping: 1 })

        var data = { name:"test", age: 25, mobile: "071231123" }

        const db = client.db('demo_db')

        // Insert a row
        // const result  = await db.collection('details').insertOne(data)
        // console.log('Row inserted ', result)

        // Get a row
        // const result = await db.collection('details').findOne({ name: 'test' })
        // console.log(result)

        // Get a row
        // const result = await db.collection('details').findOne({ age: {$gt: 22} })
        // console.log(result)

        // Update a row
        // let query = { name: 'test' }
        // let data2 = { $set: { name:'test2' } }
        
        // const result = await db.collection('details').updateOne(query, data2)
        // console.log(result)

        // Update many rows
        // let query = { name: { $gt: 22 } }
        // let data2 = { $set: { name:'test3' } }
        
        // const result = await db.collection('details').updateOne(query, data2)


        // Delete row
        // const result = await db.collection('details').deleteOne({name: 'test2'})
        console.log(result)
    }catch(err)
    {
        console.error(err)
    }finally{
        client.close();
    }
}

run()