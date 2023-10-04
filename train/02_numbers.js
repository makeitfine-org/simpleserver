let num = 3.3
num = 2.2e4
console.log(Number.MAX_SAFE_INTEGER)

console.log(num)

// console.log(Number.MIN_SAFE_INTEGER)
//
// console.log(Number.parseInt('33') + 1)
// console.log(+'33' + 4)
//
// console.log("///////")
// console.log((0.4 + 0.2).toFixed(3))
// console.log(+(0.4 + 0.2).toFixed(3))
// console.log(parseFloat((0.4 + 0.2).toFixed(5)))
// console.log("///////")
//
// console.log(2 / 5 + 1 / 5)
// console.log(2 / 5 + 1 / 5)

let b = 2342342134213412342345785798475894375893247n - 1n

console.log(b + BigInt(4))
console.log(Math.E)
console.log(Math.PI)

const a = [2, 2, 2, 3423, 2, 23423, 23, 2, -23]
console.log(Math.max(a))
console.log(Math.min(a))
console.log(Math.min(2, 2, 2, 3423, 2, 23423, 23, 2, -23))

console.log(Math.round(5.5))
console.log(Math.round(5.4))
console.log(Math.round(5.6))
console.log(Math.max(...a))
console.log(Math.min(...a))
console.log(Math.random())

function rand(min, max) {
    return min + Math.random() * (max - min)
}

console.log("--------")
for (let i = 0; i < 10; i++) {
    console.log(Math.round(rand(5, 10)))
}