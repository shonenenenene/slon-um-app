import React, { FC } from 'react'
import Description from '../Description/Description'
import Benefits from '../Benefits/Benefits'
import Plan from '../Plan/Plan'
import Certificate from '../Certificate/Certificate'
import Entry from '../Entry/Entry'
import Questions from '../Questions/Questions'
import Subscribe from '../Subscribe/Subscribe'

const Main: FC = () => {
  return (
      <main className='main'>
        <Description />
        <Benefits />
        <Plan />
        <Certificate />
        <Entry />
        <Questions />
        <Subscribe/>
      </main>
  )
}

export default Main