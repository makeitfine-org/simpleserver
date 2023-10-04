console.log("hello")

const cars = ['Ford', 'BMW', 'Mercedes', "Toyota"]
const fib = [1, 1, 2, 3, 5, 8, 13]

cars.push("OKEY")
cars.unshift("OKEY2")

console.log(cars.shift())
console.log(cars.pop())


const people = [
    {name: 'tod', budget: 3999},
    {name: 'ter', budget: 1999},
    {name: 'om', budget: 2999}
]
const i = people.findIndex((p) => p.budget > 1000)
console.log(people[i])
console.log(people.find((p) => p.budget > 1000))
const cake = p => p.budget > 2000
console.log(people)
console.log(people.filter(p => p.budget > 2000).reduce((acc, p) =>
    acc += p.budget, 0))
