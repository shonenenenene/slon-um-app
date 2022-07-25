import React, { FC } from 'react'
import SvgSelector from '../../UI/SvgSelector'
import './Animation.scss'

const Animation:FC = () => {
  return (
      <div className='header-animation'>
          <div className='header-animation-container'>
            <div className='space'>
                <img src='./img/header-space.png' alt='Космос' />
             </div>
            <div className='girl'>
                <SvgSelector id='girl'/>
            </div>
            <div className='planes'>
                <SvgSelector id='planes'/>
            </div>  
          </div>
      </div>
  )
}

export default Animation