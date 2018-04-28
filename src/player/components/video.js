import React, {Component} from 'react';
import './video.css'

class Video extends Component{
  toggleVideo(){
    if(this.props.pause){
      this.video.play()

    } else{
      this.video.pause()
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.pause !== this.props.pause){
      this.toggleVideo()
    }
  }
  setRef = element =>{
    this.video = element
  }
  render(){
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
      handleReady
    } = this.props
    return(
      <video className="Video"
        autoPlay={this.props.autoplay}
        src={this.props.src}
        ref={this.setRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onSeeking={handleSeeking}
        onSeeked={handleSeeked}
        onCanPlayThrough={handleReady}
      />
    )
  }
}

export default Video;
