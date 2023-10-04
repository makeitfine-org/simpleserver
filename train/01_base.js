//1 variables

// var name = 'Var'
// const c = 'Some (const)'
// let v = 37
// let bo = true
// let num = 3.33
//
// const o = 522 % 100
//
// name = 'Other name'
// // console.log(name)
// // console.log(c)
// // console.log(v)
// // console.log(bo)
// // console.log(num)
// // console.log(num.toString())
// // console.log("---")
// // console.log(o)
//
// let x
// const n = null
//
// console.log(typeof name)
// // console.log(typeof o)
// console.log(typeof bo)
// console.log(typeof v)
// console.log(typeof x)
// console.log(typeof n)
// console.log(null)
// console.log(typeof undefined)
// console.log(typeof undefined)
// console.log(undefined)
// console.log(undefined)
// // console.log(typeof null)
//
// // const surname = prompt('enter surname')
// // alert(surname)
//
// const cS = 'pending'
// if (cS === 'pending ') {
//     console.log(cS)
// }
//
// console.log(33 === '33')
// console.log(33 > 0 ? 'o' : 'n')
//
// function one(year) {
//     return year + 1
// }
//
// console.log(one(333))
// console.log(one(3332))
//
// const cars = ['toyota', 'mercedes', 'ford']
// console.log(cars)
// console.log(cars[2])
// cars[2] = 'one'
// console.log(cars[2])
// console.log(cars[33])
// cars.push('other')
// console.log(cars)
// console.log(cars.length)
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }
//
// console.log('===')
// for (let car of cars) {
//     console.log(car)
// }
// /////////////////////////////////////////////

const person = {
    firstName: "One",
    lastName: "Two",
    age: 37,

    fun: function (abc = 'nothing') {
        console.log(this.firstName + " " + this.lastName + " " + this.age + " " + abc)
    }
}

console.log(person.age)
console.log(person["age"])
person.fun("!")
person.fun()

