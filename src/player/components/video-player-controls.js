import React from 'react'
import './video-player-controls.css'

const VideoPlayerComponents = (props) =>(
  <div className="VideoPlayerControls">
    {props.children}
  </div>
)

export default VideoPlayerComponents
