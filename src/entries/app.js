import React, {Fragment} from 'react'
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
import {BrowserRouter} from 'react-router-dom'
import Header from '../pages/component/header'


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
    <BrowserRouter    >
        {/* children */}
        <Provider store={store}>
            <Fragment>
                <Header />
                <Home />
            </Fragment>
        </Provider>
    </BrowserRouter>
    , container);