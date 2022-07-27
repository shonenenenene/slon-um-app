import React, { FC } from 'react'
import { ICheckbox } from '../../types'

const Checkbox: FC<ICheckbox> = ({className, content}) => {
  return (
      <div className={className}>
          <input type='checkbox' />
          <span>{ content }</span>
     </div>
  )
}

export default Checkbox