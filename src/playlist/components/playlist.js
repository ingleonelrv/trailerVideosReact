import React, {Component} from 'react'
// import Media from './media'
import MediaContainer from '../containers/media-container'
import './playlist.css'

function Playlist(props){
    return(
        <div className='Playlist'>
            {//DEBEN estar las llaves para poder escribir codigo js
                props.playlist.map((mediaId)=>{
                    //si no pongo el return no se imprime, el return es para hacer push a la playlist
                    return <MediaContainer id={mediaId} key={mediaId} openModal={props.handleOpenModal} /> 
                })
            }
        </div>
    )
}
export default Playlist