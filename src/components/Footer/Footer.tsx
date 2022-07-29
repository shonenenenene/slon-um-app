import React from 'react'
import Button from '../UI/Button'
import './Footer.scss'

const Footer = () => {

    const toTop = () => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
        });
    }
    
  return (
      <footer className='footer container'>
          <div className='footer-panel'>
              <div className='socials'>
                  <a href='' target='_blank'><img src='./icons/telegram.svg' alt='telegram'/></a>
                  <a href='' target='_blank'><img src='./icons/idk.svg' alt='idk'/></a>
                  <a href='' target='_blank'><img src='./icons/footer-vk.svg' alt='vk'/></a>
              </div>
              <nav className='footer-nav'>
                <a href='' target='_blank'>Главная</a>
                <a href='' target='_blank'>Личный кабинет</a>
                <a href='' target='_blank'>Контакты</a>
                <a href='' target='_blank'>Конфиденциальность</a>
              </nav>
              <Button onClick={() => toTop()} className='up-btn' content='∧' />
          </div>
          <p className='p2 footer-bottom'>@ Все права защищены. ООО ”Слонум” 2022</p>
      </footer>
  )
}

export default Footer