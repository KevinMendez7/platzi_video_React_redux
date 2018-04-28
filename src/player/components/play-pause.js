import React from 'react';
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import './play-pause.css'

const PlayPause = (props) =>(
  <div className="PlayPause">
    {
      props.pause ?
        <button onClick={props.handleCLick}>
          <Play
           size={32} color="white"
          />
        </button>
      :
        <button onClick={props.handleCLick}>
          <Pause
           size={32} color="white"
          />
        </button>
    }
  </div>
)

export default PlayPause
