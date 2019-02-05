import React, {Component} from 'react'
import './video.css'

class Video extends Component{
    togglePlay = () => {
        //es un if ternario
        this.props.pause ? this.video.play() : this.video.pause()
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay()
        }
    }
    setRef = element => {
        this.video = element
    }
    render(){
        const {handleLoadedMetadata, handleTimeUpdate, handleSeeking, handleSeeked} = this.props
        return(
            <div className='video'>
                <video 
                    autoPlay={this.props.autoPlay}
                    src={this.props.src}
                    ref={this.setRef}
                    onLoadedMetadata={handleLoadedMetadata} 
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                     >
                </video>
            </div>
        )
    }
}
export default Video