//este metodo nos ayudara a convertir cualquier cosa de JS en algo inmutable
import {fromJS} from 'immutable'

const initialState = {
    visibility: false,
    mediaId: null
}

function modalReducer(state = initialState,action){
    switch (action.type) {
        case 'OPEN_MODAL':
            return state
        case 'CLOSE_MODAL':
            return state
        default:
            return state
    }
}
export default modalReducer