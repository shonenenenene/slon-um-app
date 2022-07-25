import React, { FC, useState } from 'react'
import Button from '../../UI/Button'
import SvgSelector from '../../UI/SvgSelector'
import Transition from 'react-transition-group/Transition';
import './Top.scss'

const Top: FC = () => {

  return (
    <div className='top container'>
      <div className='top-logo'>
        <SvgSelector className={'top-logo-img'} id={'logo'} />
        <div className='logo-title'>
          <span>Слон</span>
          <span>УМ</span>
        </div>
      </div>
        <Button className='top-btn' content='Войти'/> 
      </div>
  )
}

export default Top