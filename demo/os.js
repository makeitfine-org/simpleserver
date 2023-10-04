const os = require("os")

console.log("os: ", os.platform())

console.log("proc: ", os.arch())

console.log("proc details: ", os.cpus())
console.log("proc details: ", os.cpus().length)

console.log("free mem: ", os.freemem())
console.log("total mem: ", os.totalmem())

console.log("home dir: ", os.homedir())

console.log("time on: ", os.uptime())