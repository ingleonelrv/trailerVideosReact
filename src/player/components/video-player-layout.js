import React from 'react'
import './video-player-layout.css'

function VideoPlayerLayout(props){
    return(
        <div className='VideoPlayerLayout' ref={props.setRef}>
            {props.children}
        </div>
    )
}
export default VideoPlayerLayout