fetch(
    'http://localhost:4000/greet',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Ilija'})
    }
).then(resp => resp.text()).then(console.log)

fetch(
    'http://localhost:4000/greet',
    {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: 'Ilija'
    }
).then(resp => resp.text()).then(console.log)

fetch(
    'http://localhost:4000',
    {
        method: 'GET'
    }
).then(resp => resp.text()).then(console.log)