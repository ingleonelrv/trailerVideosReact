import React from 'react'
import {render} from 'react-dom'
import Home from '../pages/container/home'
import data from '../api.json'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers/data'
import normalizedData from '../schemas/index'

console.log('Datos normalizados ####:')
console.log(normalizedData)

//Punto importante: Aqui se define el modelo de datos a tener en la app
const initialState = {
    data: {
        // ...data,
        entities: normalizedData.entities,
        categories: normalizedData.result.categories
    },
    //la busqueda tiene que ir aparte para no muestre toda la data sino solo lo que interesa
    search:[]
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState());

const container = document.getElementById('home-container')
render(
    <Provider store={store}>
        <Home />
    </Provider>
    , container); // Lo muestro en el navegador como un tag