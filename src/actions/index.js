// import loading from "../reducers/loading";

export function openModal(mediaId) {
    return {
        type: 'OPEN_MODAL',
        payload: {
            mediaId
        }
    }
}
  
export function closeModal() {
    return {
        type: 'CLOSE_MODAL'
    }
}
  
export function searchEntities(query){
    return{
        type: 'SEARCH_VIDEO',
        payload: {
            query
        }
    }
}
//SIMULANDO UNA LLAMADA ASYNCHRONA
export function searchAsyncEntities(query){
    //gracias thunk return una funcion que tendra por parametro el dispatch
    //ya que tenemos el dispatch podemos lanzar otra accion
    return (dispatch) =>{
        // fetch().then(()=>{}), XMLHttpRequest, etc###
        //despues que se haya hecho la consulta lanzo el dispatch con la accion
        //Ejemplo mas sencillo
        dispatch(loading(true))
        setTimeout(()=>{
            dispatch(loading(false))
            dispatch(searchEntities(query))
        },5000)
    }
}

//esta funcion no se llamara directamente de una accion UI como un btn
//sino cuando se ejecute la accion asincrona dentro de la funcion
export function loading(value){
    return {
        type: 'IS_LOADING',
        payload:{
            value
        }
    }
}