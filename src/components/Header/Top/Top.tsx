import React, { FC } from 'react'
import Button from '../../../assets/UI/Button'
import SvgSelector from '../../SvgSelector'
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