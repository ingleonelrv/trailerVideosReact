import React, {Component} from 'react'
import Media from './media'
import './playlist.css'
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import FullScreen from '../../icons/components/full-screen';

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
                            {/* Estas propiedades van hacia Play pero el que las necesita es Icon */}
                            <Play size={50} color='green' /> 
                            <Pause size={50} color='red' /> 
                            <Volume size={50} color='grey' /> 
                            <FullScreen size={50} color='black' /> 
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