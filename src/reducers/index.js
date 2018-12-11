import data from './data'
import modal from './modal'

import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    //estos dos key son los que usaba initialState, si mi app usa data del store la key data aqui importa 
    //ese objeto desde mi reducer data.js
    data,
    modal
})
export default rootReducers