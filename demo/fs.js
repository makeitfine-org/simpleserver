const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "created"), (err) => {
//     if(err){
//         throw err
//     }
//
//     console.log("created")
// })


const filePath = path.join(__dirname, "created", "text.txt")
//
// fs.writeFile(filePath, "Hi, there!!!\nHi", err => {
//     if (err) {
//         throw err
//     }
//     console.log("created file")
// })
//
// fs.writeFile(filePath, "Hi, there!!!\nHi", err => {
//     if (err) {
//         throw err
//     }
//     console.log("created file")
// })
//
// fs.appendFile(filePath, "Hi, there!!!\nHi", err => {
//     if (err) {
//         throw err
//     }
//     console.log("created file")
// })

fs.readFile(filePath, "utf-8", (err, c) => {
    if (err) {
        throw err
    }

    // const data = Buffer.from(c)
    // console.log("Content: ", data.toLocaleString())
    console.log("Content: ", c)
})