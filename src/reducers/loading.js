import {Map as map} from 'immutable'

//otra forma de hacerlo inmutable
const initialState = map({
    active: false
})
function loading(state = initialState,action){
    switch (action.type) {
        case 'IS_LOADING':
            return state.set('active', action.payload.value)
        default:
            return state
    }
}
export default loading