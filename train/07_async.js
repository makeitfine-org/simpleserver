const tu = setTimeout(() => {
    console.log("Hello")
}, 2000)

clearTimeout(tu)

const i = setInterval(() => {
    console.log("Int")
}, 1000)

clearInterval(i)

const delay = (c, w) => setInterval(c, w);
// delay(() => console.log("hi"), 500)

const p = (wait = 1000) =>
    new Promise((res, rej) =>
        // setTimeout(() => console.log("HI"), wait)
        setTimeout(() =>
                // res()
                rej('err')
            , wait)
    )

// p()
//     .then(() => console.log("Promise resolved"))
//     .catch(err => console.error(err))
//     .finally(() => console.log("Finally"))

const d = () => new Promise(
    res => res([1, 1, 2, 3, 5, 8, 13])
)

// d().then(dt => console.log(dt))

async function aE() {
    try {
        await p(3000)
        console.log(">>> ", await d())
    } catch (e) {
        console.log(e)
    }finally {
        console.log("FINAL")
    }
}

aE().then(r=> console.log(r))
aE()