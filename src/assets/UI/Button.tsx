import React, { FC } from 'react'
import { IButton } from '../../types'

const Button: FC<IButton> = ({ className, content }) => {
  return (
    <button type='button' className={className}>{content}
    </button>
  )
}

export default Button