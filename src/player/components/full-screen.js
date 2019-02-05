import React from 'react'
import FSIcon from '../../icons/components/full-screen'
import './full-screen.css'

const FullScreen = props =>(
    <div className='FullScreen' onClick={props.handleFullScreen}>
        <FSIcon color='white' size={25} />
    </div>
)
export default FullScreen