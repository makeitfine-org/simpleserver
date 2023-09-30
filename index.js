const express = require('express')
const app = express()
const port = 4000

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
    res.send('POST: Hi!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})