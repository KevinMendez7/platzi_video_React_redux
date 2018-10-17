import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import { formattedTime } from '../../widgets/util/util.js';
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volumen from '../components/volumen'
import FullScreen from '../components/fullscreen'
import {connect} from 'react-redux'

class VideoPlayer extends Component{
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    timeProgressBar:0,
    durationProgressBar:0,
    loading: true,
    lastVolume: 0,
    volume: 0
  }
  handleCLick = event =>{
    this.setState({
      pause: !this.state.pause,
    })
  }
  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: formattedTime(this.video.duration),
      durationProgressBar: this.video.duration
    });
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: formattedTime(this.video.currentTime),
      timeProgressBar: this.video.currentTime
    })
  }
  handleVideoMoment = event =>{
    this.video.currentTime = event.target.value
  }
  handleSeeking = event =>{
    this.setState({
      loading: true
    })
  }
  handleSeeked = event =>{
    this.setState({
      loading: false
    })
  }
  handleReady = event =>{
    this.setState({
      loading: false
    })
  }
  handleVolume = event =>{
    this.video.volume = event.target.value
  }
  handleVolumeClick = event =>{
    this.setState({
      lastVolume: this.video.volume,
      volume: this.state.volume===0 ? this.state.lastVolume : 0
    })
    this.video.volume = this.state.lastVolume
  }
  handleFullScreen = event =>{
    if(!document.webkitIsFullScreen){
      this.player.webkitRequestFullScreen()
    } else{
      document.webkitExitFullscreen()
    }
  }
  setRef = element =>{
    this.player = element
  }
  render(){
    return(
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.media.get('title')}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleCLick={this.handleCLick}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.durationProgressBar}
            value={this.state.timeProgressBar}
            handleVideoMoment={this.handleVideoMoment}
          />
          <Volumen
            handleVolume={this.handleVolume}
            handleVolumeClick={this.handleVolumeClick}
            volume={this.state.volume}
          />
          <FullScreen
            handleFullScreen={this.handleFullScreen}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          src={this.props.media.get('src')}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          handleReady={this.handleReady}
        />
      </VideoPlayerLayout>
    )
  }
}

function mapStateToProps(state, props){  
  return {
    media: state.get('data').get('entities').get('media').get(props.id)
  }
}

export default connect(mapStateToProps)(VideoPlayer)
