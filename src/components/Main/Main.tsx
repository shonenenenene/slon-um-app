import React, { FC } from 'react'
import Description from '../Description/Description'
import Benefits from '../Benefits/Benefits'
import Plan from '../Plan/Plan'
import Certificate from '../Certificate/Certificate'
import Entry from '../Entry/Entry'

const Main: FC = () => {
  return (
      <main className='main'>
        <Description />
        <Benefits />
        <Plan />
        <Certificate />
        <Entry/>
      </main>
  )
}

export default Main