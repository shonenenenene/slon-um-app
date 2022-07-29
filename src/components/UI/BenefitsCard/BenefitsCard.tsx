import React, { FC } from 'react'
import { IBenefitsCard } from '../../../types'
import './BenefitsCard.scss'

const BenefitsCard: FC<IBenefitsCard> = ({ src, content, alt }) => {



  return (
      <div className='benefits-card'>
          <div className='benefits-card-img'>
              <img src={src} alt={ alt } />
          </div>
          <p className='p2'>{content}</p>
      </div>
  )
}

export default BenefitsCard