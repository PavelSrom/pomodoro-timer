import React from 'react'
import './TimeRemaining.css'

const timeRemaining = props => {
  let minsLeft
  let secsLeft
  if (props.timeLeft <= 0) {
    minsLeft = 0
    secsLeft = 0
  } else {
    minsLeft = Math.floor(props.timeLeft / 60)
    secsLeft = props.timeLeft % 60
  }

  // fix single digits
  const lessThan10 = num => (num < 10 ? `0${num}` : num)

  return (
    <div className="text-center py-2">
      <p className="display-4 digits">
        {lessThan10(minsLeft)}:{lessThan10(secsLeft)}
      </p>
    </div>
  )
}

export default timeRemaining
