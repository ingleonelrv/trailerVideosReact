import React, {Fragment} from 'react'
import {render} from 'react-dom'
//CAMBIAR NOMBRE AL ARCHIVO FISICO
import Header from '../pages/component/header'
import Videos from '../pages/container/home'
import Home from '../pages/component/home'
import Contact from '../pages/component/contact'
import User from '../pages/component/user'
import NotFound from '../pages/component/not-found'
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
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


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
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/videos' component={Videos} />
                    <Route exact path='/contacto' component={Contact} />
                    <Route exact path='/perfil' component={NotFound} />
                    <Redirect from='/v' to='/videos' />
                    <Route component={NotFound} />
                </Switch>
                {/* <Home /> */}
            </Fragment>
        </Provider>
    </BrowserRouter>
    , container);