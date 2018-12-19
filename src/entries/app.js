import React from 'react'
// import {render} from 'react-dom'
import {hydrate} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from '../app'

//APP LADO BROWSER
const container = document.getElementById('home-container')
hydrate(
    <BrowserRouter    >
        <App />
    </BrowserRouter>
    , container);