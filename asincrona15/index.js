const express = require('express')
const app = express()
const prompt = require('prompt');

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

function factorial (n) {
    if (n <= 1 ) {
        return 1
    }
    return n * factorial(n - 1)
}

app.listen(port, () => {
    console.log(`
        Example app listening at http://localhost:${port}\n
        Calculemos el factorial
    `)
    prompt.start();
    prompt.get(['numero'], function (err, result) {
        console.log('\n' + 'El factorial de ' + result.numero);
        console.log('es: ' + factorial(parseInt(result.numero)));
    });
})
