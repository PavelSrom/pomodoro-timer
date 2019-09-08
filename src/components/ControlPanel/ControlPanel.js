import React from 'react'
import './ControlPanel.css'

const controlPanel = props => {
  let midIcon = props.isRunning ? (
    <i className="fas fa-pause" onClick={props.freezeTime} />
  ) : (
    <i className="fas fa-play" onClick={props.runTime} />
  )

  return (
    <div className="controls mx-auto pb-3">
      <i className="fas fa-redo" onClick={props.resetTime} />
      {midIcon}
      <i className="fas fa-cog" onClick={props.openMenu} />
    </div>
  )
}

export default controlPanel
