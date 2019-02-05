import api from '../api.json'
import {normalize, schema} from 'normalizr'

//le pasamos como parametro la key para identificar todos los medias, definicion del schema por si quiero heredarlo y opciones
//opciones: q key de media usare como id= ya tengo un key id usare ese
const media = new schema.Entity('media',{},{
    idAttribute:'id',
    // processStrategy: (mediaValue, parentValue, mediaKey)=> (return que datos quiero devolver de media)
    processStrategy: (value, parent, key)=>({...value, category: parent.id})
})

//le pasamos como parametro el key identificador y en este caso si voy a heredar la playlist y esta es un arreglo de medias
const category = new schema.Entity('categories',{
    playlist: new schema.Array(media)
})

//en este caso hay 3 category, un arreglo que podemos ver en la api, igual las playlist
//quiero retornar un objeto de categories, los key usados estan en la api
const categories = {categories: new schema.Array(category)}

const normalizedData= normalize(api, categories)

export default normalizedData