import React, { FC, useState } from 'react'
import { IAccordion } from '../../../types'
import Button from '../Button'
import './Accordion.scss'

const Accordion: FC<IAccordion> = ({ className, title, content }) => {
    
    const [isOpen, setIsOpen] = useState(false)

    const openToggle = () => {
        if (isOpen === false) {
            setIsOpen(true)
        } else if (isOpen === true) {
            setIsOpen(false)
        }
    }
    
  return (
      <div className={`accordion  ${className}`}>
          <div className='accordion-interface'>
              <p className='p2'>{title}</p>
              <Button onClick={() => openToggle()} content='+'
                className={`accordion-btn ${isOpen ? 'btn-animation-forward' : 'btn-animation-backward'}`} />
          </div>
          {isOpen ?
              <div className='accordion-content p2'>{content}</div> : <div></div>}
      </div>
  )
}

export default Accordion