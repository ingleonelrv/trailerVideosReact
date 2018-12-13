import React from 'react'
import {render} from 'react-dom'
import Home from '../pages/container/home'
// import data from '../api.json'
import {createStore, applyMiddleware} from 'redux'
// Logger with default options
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import reducer from '../reducers/index'
// import normalizedData from '../schemas/index'
import {Map as map} from 'immutable'

// console.log('Datos normalizados ####:')
// console.log(normalizedData)

//Punto importante: Aqui se define el modelo de datos a tener en la app
// const initialState = {
//     data: {
//         // ...data,
//         entities: normalizedData.entities,
//         categories: normalizedData.result.categories,
//         search:[],
//     },
//     //la busqueda tiene que ir aparte para no muestre toda la data sino solo lo que interesa
//     modal:{
//         visibility: false,
//         mediaId: null
//     }
// }

//{ dispatch, getState } descompuesto para no poner store.dispatch y store.getState
// function logger({ dispatch, getState }){
//     //arrow function para heredar el contexto y despacha el siguiente middleware
// 	return ( next ) => {
//  		return ( action ) => {
//  			console.log( 'estado anterior:', getState().toJS() )
//  			console.log( 'enviando acción:', action)
//  			const rslt = next( action )
//  			console.log( 'nuevo estado   :', getState().toJS() )
//  			return rslt
//  		}
// 	}
// }

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState());

const container = document.getElementById('home-container')
render(
    <Provider store={store}>
        <Home />
    </Provider>
    , container); // Lo muestro en el navegador como un tag