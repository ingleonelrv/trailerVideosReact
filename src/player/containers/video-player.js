import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'

class VideoPlayer extends Component{
    state={
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false
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
    handleProgressChange = event =>{
        //mi evento captura el valor a donde estoy moviendo el control y cambia el currentTime del video
        this.video.currentTime = event.target.value
    }
    handleSeeking= event =>{
        this.setState({
            loading:true
        })
    }
    handleSeeked= event =>{
        this.setState({
            loading:false
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
                    handleSeeked={this.handleSeeked}
                    handleSeeking={this.handleSeeking}
                    autoPlay={this.props.autoplay} 
                    src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' />
                <Controls>
                    <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
                    <Timer currentTime={this.state.currentTime} duration={this.state.duration} />
                    <ProgressBar duration={this.state.duration} value={this.state.currentTime} handleProgressChange={this.handleProgressChange} />
                </Controls>
                {
                    this.state.loading &&
                    <Spinner />
                }
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer