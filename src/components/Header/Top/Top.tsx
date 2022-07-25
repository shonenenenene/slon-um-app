import React, { FC } from 'react'
import './Top.scss'
import SvgSelector from '../../SvgSelector'

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
      <button className='top-btn' type='button'>
        Войти
      </button>
    </div>
  )
}

export default Top