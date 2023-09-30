const express = require('express')
const app = express()
const port = 4000
// const audit = require('express-requests-logger')
// app.use(audit())

const allowedGreetOrigins = ['https://www.google.com','https://meta.ua']
let origin

app.use((req, res, next) => {
    console.log("====== New request =====");
    console.log("method: " + req.url);
    console.log("url:    " + req.method);
    console.log("host:    " + req.headers.host);
    console.log("origin:    " + req.headers.origin);
    console.log("-----");

    origin = req.headers.origin
    if (allowedGreetOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin)
    }

    next();
});
app.use(express.json());
app.use(express.text())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/greet', (req, res) => {
    res.send('Hi!')
})

app.get('/greet', (req, res) => {
    res.send('Hi!')
})

app.post('/greet', (req, res) => {


    console.log('body: ' + JSON.stringify(req.body))

    let contentType = req.header('Content-Type')
    console.log('Content-Type: ' + contentType)

    if (contentType == 'application/json') {

        // if (allowedGreetOrigins.includes(origin)) {
        //     res.header("Access-Control-Allow-Origin", origin)
        // }

        res.send('POST: name (json)> ' + req.body.name + ' Hi!')
    } else if (contentType == 'text/plain') {
        res.send('POST: name (text)> ' + req.body + ' Hi!')
    } else {
        res.send('POST: don\'t know what to do.  Hi!')
    }
})

app.options('/greet', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'POST')
    res.header('Access-Control-Allow-Headers', 'Content-type')

    res.send()
})

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
