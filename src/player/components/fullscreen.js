import React from 'react'
import FullScreenIcon from '../../icons/components/fullscreen'
import './fullscreen.css'

function FullScreen(props){
  return(
    <div
      onClick={props.handleFullScreen}
      className="FullScreen"
    >
      <FullScreenIcon
        color="white"
        size={25}
      />
    </div>
  )
}

export default FullScreen
