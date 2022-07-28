import React from 'react'
import Button from '../UI/Button'
import './Footer.scss'

const Footer = () => {
  return (
      <footer className='footer container'>
          <div className='socials'></div>
          <nav className='footer-nav'></nav>
          <Button className='up-btn' content='🢑'/>
      </footer>
  )
}

export default Footer