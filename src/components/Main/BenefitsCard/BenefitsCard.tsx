import React, { FC } from 'react'
import { IBenefitsCard } from '../../../types'
import './BenefitsCard.scss'

const BenefitsCard: FC<IBenefitsCard> = ({ src, content }) => {



  return (
      <div className='benefits-card'>
          <div className='benefits-card-img'>
              <img src={src} />
          </div>
        {(content.includes('Подписывайтесь!')) ?
            <p className='p2'>Публикация работ победителей во ВКонтакте. <a href='' target='_blank'>Подписывайтесь!</a></p> :
            <p className='p2'>{content}</p>
        }
      </div>
  )
}

export default BenefitsCard