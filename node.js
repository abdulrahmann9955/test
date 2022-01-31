// // const amount = 2

// // if (amount < 12) {
// //     console.log('Small number')
// // } else {
// //     console.log('large number')
// // }

// // console.log(`Hey its my first node app`)

// console.log(__dirname)

// // setInterval(() => {
// //     console.log('Repeat every second')
// // }, 1000)

const names = require('./names.js')
const sayHi = require('./utlis')
const newWay = require('./newWay')
console.log(newWay)
console.log(names)
require('./test')

sayHi('Susan')
sayHi(names.abdul)
sayHi(names.tasbeeh)
sayHi(newWay.Person.name)
