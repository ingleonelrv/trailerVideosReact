//importo express
const express = require('express')
//creo una app express
const app = express()
//al entrar al server reacciona de esta forma:

const App = require('./app')
const ReactRouter = require('react-router')

//get('/|*|/videos|/contacto',(request:url, response))
app.get('*',(req, res)=>{
    console.log(req.url)
    //escribo un html
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Platzi-Video</title>
            <!-- <link rel="stylesheet" href="./dist/css/home.b28dbeffcdfbea6ea567.css" /> -->
        </head>
        <body>
            <div id="home-container"> ${req.url}</div>
            <div id="portal-container"></div>
            <script src="http://localhost:9000/js/app.js"></script>
            <!-- <script src="./dist/js/home.b28dbeffcdfbea6ea567.js"></script> -->
        </body>
        </html>
    `)
    //termino de escribir
    res.end()
})
//prendo la app en el puerto 3000
app.listen(3000)
console.log('server prendido')