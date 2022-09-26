// var crypto = require('crypto')
// var hash = crypto.createHash('md5') // whirlpool, sha1, sha224, sha256, sha384, sha512, ripemd160, 

// data = hash.update('nodejsera', 'utf-8')

// gen_hash = data.digest('hex')

// console.log(gen_hash)

// // perform hash on a file
// var fs = require('fs')

// let hash_alg = crypto.createHash('sha256')
// let readStream = fs.ReadStream('message.txt')

// readStream.on('data', (data) => {
//     hash_alg.update(data)
// })

// readStream.on('end', () => {
//     let generatedHash = hash_alg.digest('hex')

//     fs.writeFileSync('message_hashed.txt', generatedHash)
// })

// HMAC

let crypto = require('crypto')

let hmac = crypto.createHmac('sha256', 'mysecretkey') // sha512, md5, whirlpool, 

data = hmac.update('nodejsera')

generatedHmac = data.digest('hex')

console.log(generatedHmac)

// Hmac a file same as hashing