import React, { FC } from 'react'
import { IBenefitsCard } from '../../../types'
import SvgSelector from '../../UI/SvgSelector'
import './BenefitsCard.scss'

const BenefitsCard: FC<IBenefitsCard> = ({id, content }) => {
  return (
      <div className='benefits-card'>
          <div className='benefits-card-img'>
              <SvgSelector id={id} />
              <p className='p2'>{ content }</p>
          </div>
      </div>
  )
}

export default BenefitsCard