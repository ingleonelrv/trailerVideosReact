import React from 'react'
import './video-player-layout.css'

function VideoPlayerLayout(props){
    return(
        <div className='VideoPlayerLayout'>
            {props.children}
        </div>
    )
}
export default VideoPlayerLayout