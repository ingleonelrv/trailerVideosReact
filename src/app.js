import React, {Fragment, Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import {Map as map} from 'immutable'
import {Route, Switch, Redirect} from 'react-router-dom'

//ARCHIVOS CODIFICADOS
import reducer from './reducers/index'
import Header from './pages/component/header'
import Videos from './pages/container/home'
import Home from './pages/component/home'
import Contact from './pages/component/contact'
import User from './pages/component/user'
import NotFound from './pages/component/not-found'

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    )
)
//APP PARA EL SERVIDOR
class App extends Component{
    render(){
        return(
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
        )
    }
}
export default App
