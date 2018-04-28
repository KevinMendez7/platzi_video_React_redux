import React from 'react'
import VolumenIcon from '../../icons/components/volumen'
import './volumen.css'

function Volumen(props){
  return(
    <button className="Volume"
      onClick={props.handleVolumeClick}
    >
      <VolumenIcon
      size={25}
      color="white"
      />
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          value={props.volume}
          onChange={props.handleVolume}
        />
      </div>
    </button>
  )
}

export default Volumen
