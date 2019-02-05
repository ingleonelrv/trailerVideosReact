//este metodo nos ayudara a convertir cualquier cosa de JS en algo inmutable
import {fromJS} from 'immutable'

const initialState = fromJS ({
    visibility: false,
    mediaId: null
})

function modalReducer(state = initialState,action){
    switch (action.type) {
        case 'OPEN_MODAL':
            return state.merge({
                visibility: true,
                mediaId: action.payload.mediaId
            })
        case 'CLOSE_MODAL':
            return state.set('visibility',false)
        default:
            return state
    }
}
export default modalReducer