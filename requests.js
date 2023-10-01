fetch(
    'http://localhost:4000/greet',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: 'Ilija'})
    }
).then(resp => resp.text()).then(console.log)

fetch(
    'http://localhost:4000/greet',
    {
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
        body: 'Ilija'
    }
).then(resp => resp.text()).then(console.log)

fetch(
    'http://localhost:4000',
    {
        method: 'GET'
    }
).then(resp => resp.text()).then(console.log)

document.cookie = encodeURIComponent('user') + '=' + encodeURIComponent('Tod') + '; max-age=5'

const parseCookie = str =>
    str
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
        }, {});