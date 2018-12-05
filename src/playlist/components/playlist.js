import React, {Component} from 'react'
import Media from './media'
import './playlist.css'

function Playlist(props){
    //ya no necesita el this
    const categories = props.data.categories
    return(
        <div>
            {
                categories.map((item)=>{
                    console.log(item)
                    return(
                        <div className='Playlist' key={item.id}>
                            <h3>{item.title}</h3>
                            {//DEBEN estar las llaves para poder escribir codigo js
                                item.playlist.map((item)=>{
                                    //si no pongo el return no se imprime, el return es para hacer push a la playlist
                                    return <Media {...item} key={item.id} /> 
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )  
}
export default Playlist