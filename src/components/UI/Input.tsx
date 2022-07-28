import React, { FC } from 'react'
import { IInput } from '../../types'

const Input: FC<IInput> = ({ className, type, placeholder }) => {

  return (
      <div className={className}>
          <input type={type} placeholder={ placeholder } />
      </div>
  )
}

export default Input