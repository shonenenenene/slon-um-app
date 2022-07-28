import React, { FC, useEffect, useState } from 'react'
import './Timer.scss'

const Timer: FC = () => {
  
  const [minutes, setMinutes] = useState(43);

  const tick = () => {
    if (minutes === 59) {setMinutes(0)} else setMinutes(minutes + 1)
  }
   
  useEffect(() => {
    const timerID = setInterval(() => tick(), 60000);
    return () => clearInterval(timerID);
  })

  return (
    <div className='timer'>
      <div className='num days'>01</div>
      <div className='colon'>:</div>
      <div className='num hours'>09</div>
      <div className='colon'>:</div>
      <div className='num minutes'>{ minutes }</div>
    </div>
  )
}

export default Timer