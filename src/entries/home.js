import React from 'react'
import {render} from 'react-dom'
import Home from '../pages/container/home'
import data from '../api.json'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

//Punto importante: Aqui se define el modelo de datos a tener en la app
const initialState = {
    data: {
        ...data
    }
}

const store = createStore(
    (state)=> state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState());

const container = document.getElementById('home-container')
render(
    <Provider store={store}>
        <Home />
    </Provider>
    , container); // Lo muestro en el navegador como un tag