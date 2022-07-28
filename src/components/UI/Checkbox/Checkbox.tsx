import React, { FC } from 'react'
import { ICheckbox } from '../../../types'
import './Checkbox.scss'

const Checkbox: FC<ICheckbox> = ({className}) => {
  return (
      <label className={`checkbox-container ${className}`}>
          <input type='checkbox' />
          <span className='custom-checkbox'></span>
          <span className='label'>Отправляя данные я соглашаюсь с <a href='' target='_blank'>Условиями конкурса</a><br/> и <a href='' target='_blank'>Политикой обработки данных</a></span>
     </label>
  )
}

export default Checkbox