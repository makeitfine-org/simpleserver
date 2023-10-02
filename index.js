const express = require('express')
const app = express()
const port = 4000
const cookieParser = require('cookie-parser');
// const audit = require('express-requests-logger')
// app.use(audit())
app.use(express.json());
app.use(express.text())
app.use(cookieParser());

const allowedGreetOrigins = ['https://www.google.com', 'https://meta.ua', 'https://en.wikipedia.org',
    "http://top:4000", "http://localhost:4000"]
let origin

app.use((req, res, next) => {
    console.log("====== New request =====");
    console.log("method: " + req.method);
    console.log("url:    " + req.url);
    console.log("host:    " + req.headers.host);
    console.log("origin:    " + req.headers.origin);

    // cookiesLog(req);

    console.log("-----");

    origin = req.headers.origin
    // if (allowedGreetOrigins.includes(origin)) {
    //     res.header("Access-Control-Allow-Origin", origin)
    // }

    res.set('Cache-Control', 'no-store')

    const SEC = 1000;

    res.cookie('HOST | ORIGIN ', (req.headers.host).toString() + " | " + req.headers.origin, {
        maxAge: 15 * SEC,
        httpOnly: true,
        secure: false
    })
    // check if client sent cookie
    const cookie = req.cookies.cookieName
    if (cookie === undefined) {
        // no: set a new cookie
        let randomNumber = Math.random().toString()
        randomNumber = randomNumber.substring(2, randomNumber.length);
        res.cookie('cookieName', randomNumber, {maxAge: 30 * SEC, httpOnly: false});
        console.log('cookie created successfully');
    } else {
        // yes, cookie was already present
        console.log('cookie exists', cookie);
    }

    next();
});

function cookiesLog(req) {
    if (req.cookie != null) {
        console.log('cookie: ' + req.cookie)
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/greet', (req, res) => {
    // if (allowedGreetOrigins.includes(origin)) {
    //     res.header("Access-Control-Allow-Origin", origin)
    // }
    res.send('Hi!')
})

app.post('/greet', (req, res) => {
    console.log('body: ' + JSON.stringify(req.body))

    let contentType = req.header('Content-Type')
    console.log('Content-Type: ' + contentType)

    if (contentType == 'application/json') {

        if (allowedGreetOrigins.includes(origin)) {
            res.header("Access-Control-Allow-Origin", origin)
        }

        res.send('POST: name (json)> ' + req.body.name + ' Hi!')
    } else if (contentType == 'text/plain') {
        res.send('POST: name (text)> ' + req.body + ' Hi!')
    } else {
        res.send('POST: don\'t know what to do.  Hi!')
    }
})

app.options('/greet', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT')
    res.header('Access-Control-Allow-Headers', 'Content-type')
    res.header("Access-Control-Max-Age", 5)

    if (allowedGreetOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin)
    }

    res.send()
})

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
