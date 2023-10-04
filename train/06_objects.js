const person = {
    name: "Name",
    age: 37,
    isDeveloper: true,
    "complex key": "hi",
    languages: ["ua", "de", "en"],
    greet() {
        console.log("hello from greet")
    },
    info() {
        console.log("Info about: " + this.name)
    }
}

// console.log(person.name)
// console.log(person["age"])
// console.log(person["complex key"])
//
// person["complex key"] = undefined
//
// console.log(person)
// delete person["complex key"]
// console.log(person)
//
//
// const {name, age: tom, languages} = person
// console.log(name, tom, languages)
//
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log("key: ", key)
//         console.log("value: ", person[key])
//     }
// }

// console.log(person)

// Object.keys(person).forEach(k => console.log(`${k} : ${person[k]}`))
// Object.keys(person).forEach(k => {
//     console.log(k)
//     console.log(person[k])
// })

// person.info()

const logger = {
    keys() {
        console.log("keys: ", Object.keys(this))
    },
    keyAndValueList() {
        // Object.keys(this).forEach(k => console.log(`${k} : ${this[k]}`))
        // const self = this
        Object.keys(this).forEach(function (k) {
            console.log(`${k} : ${this[k]}`)
        }.bind(this))
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log("--- Start ---")
        }
        Object.keys(this).forEach((k, i, a) => console.log(`${k} : ${this[k]}`))
        if (bottom) {
            console.log("--- End ---")
        }
    }
}

logger.keys.bind(logger)()
logger.keys.call(logger)

console.log("------------")
logger.keyAndValueList.call(logger)
console.log("------------")
logger.keyAndValueList.call(person)
console.log("------------")
logger.withParams.call(person, true, false, true)
logger.withParams.apply(person, [true, false, true])

// const bound = logger.keys.bind(person)
// bound()