import React, { FC } from 'react'
import Description from './Description/Description'
import Benefits from './Benefits/Benefits'

const Main: FC = () => {
  return (
      <main className='main'>
          <Description />
          <Benefits/>
      </main>
  )
}

export default Main