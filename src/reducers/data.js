function data(state, action){
    switch (action.type) {
        case 'SEARCH_VIDEO':
            //pude haber quitado los [] e igualar todo a results y quitar .push
            let results = []
            if(action.payload.query){
                //itero las categorias y por cada una obtengo una playlist
                state.data.categories.map((item)=>{
                    //accedo a la playlist y uso un metodo de las listas filter(funcion) q recibe cada elemento de la lista
                    return  item.playlist.filter((item)=>{
                        //filter devuelve true o false segun el resultado de la condicion que agregare
                        //comparando por author: include es metodo de strign que compara item con lo que le llega
                        return item.author.includes(action.payload.query) && results.push(item) 
                    })
                })
            }
            return {
                ...state,
                search: results,
            }   
        default:
            return state
    }
}
export default data