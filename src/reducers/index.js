import data from './data'
import modal from './modal'
import loading from './loading'

// import {combineReducers} from 'redux'
import {combineReducers} from 'redux-immutable'

const rootReducers = combineReducers({
    //estos dos key son los que usaba initialState, si mi app usa data del store la key data aqui importa 
    //ese objeto desde mi reducer data.js
    data,
    modal,
    loading
})
export default rootReducers