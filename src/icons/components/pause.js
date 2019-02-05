import React from 'react'
import Icon from './icon'

function Pause(props){
    return(
        // Generated by IcoMoon.io
        //uso spread operator y le heredo a Icon las propiedades recibidas desde Playlist
        <Icon {...props}> 
            <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>     
        </Icon>
    )
}
export default Pause