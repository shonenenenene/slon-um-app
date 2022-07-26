import React, { FC } from 'react'
import Description from '../Description/Description'
import Benefits from '../Benefits/Benefits'
import Plan from '../Plan/Plan'

const Main: FC = () => {
  return (
      <main className='main'>
        <Description />
        <Benefits />
        <Plan/>
      </main>
  )
}

export default Main