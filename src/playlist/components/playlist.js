import React, {Component} from 'react'
import Media from './media'
import './playlist.css'

function Playlist(props){
    return(
        <div className='Playlist'>
            {//DEBEN estar las llaves para poder escribir codigo js
                props.playlist.map((item)=>{
                    //si no pongo el return no se imprime, el return es para hacer push a la playlist
                    return <Media {...item} key={item.id} handleClick={props.handleOpenModal} /> 
                })
            }
        </div>
    )
}
export default Playlist