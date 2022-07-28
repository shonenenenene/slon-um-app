import React, { FC } from 'react'
import { IButton } from '../../types'

const Button: FC<IButton> = ({ className, content, onClick }) => {
  return (
    <button onClick={onClick} type='button' className={className}>{content}
    </button>
  )
}

export default Button