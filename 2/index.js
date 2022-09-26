const { setFips } = require('crypto')
var fs  = require('fs')

// Asyncronously reading
// fs.readFile('message.txt', (err, data) => {
//     if(err) {
//         return err
//     }

//     console.log("Content: ", data)
// })

// console.log("Still reading...")

// Syncronously reading
// let content = fs.readFileSync('message.txt')

// console.log("Content: ", content)
// console.log('Done reading.')


// writing to a file async
// let content = "Some content"

// fs.writeFile('message.txt', content, (err) => {
//     if(err)
//     {
//         throw err
//     }

//     console.log("It worked")
// })

// // writing to a file sync
// let content = "Some content2"

// fs.writeFileSync('message.txt', content)
// console.log("It worked")


// Append to a file async
// let data = "\nThis data will be appended"

// fs.appendFile('message.txt', data, (err) => {
//     if(err)
//         throw err

//     console.log("It worked")
// })

// // Append to a file sync
// fs.appendFileSync("message.txt", data)

// // Rename a file async
// fs.rename("message.txt", 'data.txt', (err) => {
//     if(err)
//         throw err

//     console.log("It worked")
// })

// Rename a file sync
// fs.renameSync('data.txt', "message.txt")


// Delete a file
// fs.unlink("message.txt", (err) => {
//         if(err)
//             throw err
    
//         console.log("It worked")
// })


// fs.unlinkSync('message.txt')