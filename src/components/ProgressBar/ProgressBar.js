import React from 'react'
import './ProgressBar.css'

const progressBar = props => {
  const widthLength = (props.rem / (props.int * 60)) * 100

  return (
    <div className="bar-background mb-2">
      <div className="bar" style={{ width: `${widthLength}%` }} />
    </div>
  )
}

export default progressBar
