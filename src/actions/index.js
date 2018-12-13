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
        setTimeout(()=>{
            dispatch(searchEntities(query))
        },5000)
    }
    // return{
    //     type: 'SEARCH_ASYNC_VIDEO',
    //     payload: {
    //         query
    //     }
    // }
}