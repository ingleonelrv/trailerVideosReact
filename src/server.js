//importo express
// const express = require('express')
import express from 'express';
// const App = require('./app')
import App from '../dist/ssr/app';
// const ReactRouter = require('react-router')
import {StaticRouter} from 'react-router';
import reactDomServer from 'react-dom/server';
import React from 'react'

//creo una app express
const app = express();
app.use(express.static('dist'))
app.use('/images', express.static('images'))


//get('/|*|/videos|/contacto',(request:url, response))
app.get('*',(req, res)=>{
    const html= reactDomServer.renderToString(
        <StaticRouter
            location={req.url}
            context={{
                name:'x'
            }}
        >
            <App />
        </StaticRouter>
    )
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Platzi-Video</title>
            <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
            <div id="home-container"> ${html}</div>
            <div id="portal-container"></div>
            <!-- <script src="http://localhost:9000/js/app.js"></script> -->
            <script src="/js/app.js"></script>
        </body>
        </html>
    `)
    //termino de escribir
    res.end()
})
//prendo la app en el puerto 3000
app.listen(3000)
console.log('server prendido')