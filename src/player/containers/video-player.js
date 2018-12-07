import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'

class VideoPlayer extends Component{
    state={
        pause: true
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
    render(){
        return(
            <VideoPlayerLayout>
                <Title title='Titulo del video' />
                <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
                <Video pause={this.state.pause} autoPlay={this.props.autoplay} src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' />
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer