import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'

class VideoPlayer extends Component{
    state={
        pause: true,
        duration: 0,
        currentTime: 0
    }
    togglePlay = event => {
        this.setState({
            pause:!this.state.pause
        })
    }
    componentDidMount(){
        this.setState({
            //condicion: si autoplay viene true lo niego=false
            pause: (!this.props.autoPlay)
        })
    }
    handleLoadedMetadata = event =>{
        this.video = event.target
        this.setState({
            duration: this.video.duration
        })    
    }
    handleTimeUpdate = event =>{
        // console.log(this.video.currentTime)
        this.setState({
            currentTime: this.video.currentTime
        })
    }
    render(){
        return(
            <VideoPlayerLayout>
                <Title title='Titulo del video' />                
                <Video 
                    pause={this.state.pause}
                    handleLoadedMetadata = {this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    autoPlay={this.props.autoplay} 
                    src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' />
                <Controls>
                    <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
                    <Timer currentTime={this.state.currentTime} duration={this.state.duration} />
                </Controls>
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer