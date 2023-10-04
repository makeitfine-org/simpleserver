// window.alert("i")

// let h1 = document.getElementById("h1Id")
// let h1 = document.getElementsByTagName("h1")[0]
// let h1=document.getElementsByClassName("h1")[0]
let h1 = document.querySelector("#h1Id")
// console.log(h1)
console.dir(h1.textContent)

const h1Next = h1.nextElementSibling
console.log(h1Next.textContent)
console.log(document.querySelectorAll('h1')[1].children)

const time = 1000

setInterval(() => h1.textContent = "Changed", time)

setTimeout(() =>
        setInterval(() => h1.textContent = "Hi, there!!!", time),
    time / 2
)

const change = (e) => {
    e.style.color = "blue"
    e.style.textAlign = 'center'
}

change(h1)

h1.onclick = () => {
    console.log("click")
}

h1.addEventListener('dblclick', () => console.log("!!!"))

const link = document.querySelector("a")
link.href = "https://i.ua"

link.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
    window.location=e.target.href
})