const express = require('express')
const app = express()
const port = 4000
const audit = require('express-requests-logger')

app.use((req, res, next) => {
    console.log("====== New request =====");
    console.log("method: " + req.url);
    console.log("url:    " + req.method);
    next();
});
app.use(express.json());

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
    res.send('POST:' + req.body.name + ' Hi!')
})

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})