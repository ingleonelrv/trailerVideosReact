import React, {Component} from 'react'
import './video.css'

class Video extends Component{
    render(){
        return(
            <div className='video'>
                <video 
                    autoPlay={this.props.autoPlay}
                    src={this.props.src}>
                </video>
            </div>
        )
    }
}
export default Video