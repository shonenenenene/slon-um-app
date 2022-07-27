import React, { FC } from 'react'
import Description from '../Description/Description'
import Benefits from '../Benefits/Benefits'
import Plan from '../Plan/Plan'
import Certificate from '../Certificate/Certificate'

const Main: FC = () => {
  return (
      <main className='main'>
        <Description />
        <Benefits />
        <Plan />
        <Certificate/>
      </main>
  )
}

export default Main