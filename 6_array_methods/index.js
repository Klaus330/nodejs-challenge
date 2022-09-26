var names = ['Claudiu', "Andrei", 'Ion']

console.log(names.length)

names.push('Gigel')
console.log(names)


names.pop()
console.log(names)

names.unshift(1)
console.log(names)


names.shift()
console.log(names)

names.reverse()
console.log(names)

names.sort()
console.log(names)

names.splice(2, 2, 'rj', 'nodejs')
console.log(names)

names.splice(2, 2)
console.log(names)

let names2 = ['Gicu', "Bogdan"]
console.log(
    names.concat(names2)
)

console.log(
    names.indexOf('Claudiu')
)

console.log(
    names.join(';')
)

console.log(
    names.slice(-2, -1)
)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let evenNumbers = [2, 4, 6, 8]
function even(val) {
    return val % 2 === 0
}

console.log(numbers.every(even))
console.log(evenNumbers.every(even))

console.log(
    numbers.filter((value) => value % 2 === 0)
)

evenNumbers.forEach(val => console.log(val + 1))



function mul(value, total)
{
    total = value * total
    
    return total
}

console.log(evenNumbers.reduce(mul))