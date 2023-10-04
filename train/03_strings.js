const name = "NAME"
const age = 27

function a(a) {
    console.log(a)
}

const exp = `hi, there ${name} ooo ${age}` + `abc`


console.log(exp)
a(exp)

const o = `
<body>
    <div>
        Okey
    </div>
</body>
`

console.log(o.length)

function one(a, b, c) {
    console.log(a, b, c)
    return "okey " + a + b + c
}

let fun = one`one two three ${age} okey ${name}`
console.log(fun)
