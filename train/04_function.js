const greet2 = function (name) {
    console.log(name)
}

greet2(333)

greet("Okey")

function greet(name) {
    console.log("hi, " + name)
}

console.log(typeof greet2)
console.log(typeof greet)

console.dir(greet2)
console.dir(greet)

// const i = setInterval(function () {
//     clearInterval(i)
//     console.log(Date())
// }, 1000)

const fg = (name = 2) => console.log(name ** 5)

const f2g = (...name) => console.log(name)

fg(5)
f2g(5, 2, 3, 42, 34, 23, 423, 'sdfsdf', 23.2, null)


function creat(name) {
    return function (lastName) {
        console.log(lastName + " " + name)
    }
}

console.log("============")
console.log(creat("sss"))
creat("sss")(222)
creat("sss")()
creat()(22)
// console.log(creat())
