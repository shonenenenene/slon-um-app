import React from 'react'
import Button from '../UI/Button'
import Checkbox from '../UI/Checkbox'
import Input from '../UI/Input'
import './Entry.scss'

const Entry = () => {
  return (
      <section className='container entry'>
          <div className='entry-sale'>
                <svg width="292" height="110" viewBox="0 0 292 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M281.07 14.7005H292L281.07 0V14.7005Z" fill="#0E8958"/>
                    <path d="M10.9305 14.7005H0L10.9305 0V14.7005Z" fill="#0E8958"/>
                    <path d="M281.07 14.7005V0H10.9305V14.7005V110L146 74.5161L281.07 110V14.7005Z" fill="#14A76C"/>
                </svg>
                <span className='entry-sale-title1'>Скидка за репост</span>
                <span className='entry-sale-p1 p2'>Стоимость участия:</span>
                <span className='entry-sale-price'>149₽</span>
                <span className='entry-sale-p2 p2'>При наличии репоста в соцсетях :)</span>
                <div className='entry-sale-footer'>
                    <div className='entry-sale-title2'>Получить скидку:</div>
                    <div className='entry-sale-links'>
                        <a href='' target='_blank'><img src='./img/vk.svg'/></a>
                        <a href='' target='_blank'><img src='./img/ok.svg'/></a>
                    </div>
                </div>
          </div>
          <div className='entry-registration'>
              <h2>Зарегистрируйтесь, чтобы участвовать</h2>
              <div className='entry-registration-inputs'>
                  <Input placeholder='ФИО ребёнка' />
                  <Input placeholder='Дата рождения' />
                  <Input placeholder='Город' />
                  <Input placeholder='Email' />
                  <Input placeholder='Пароль'/>
              </div>
              <Checkbox className='entry-registration-checkbox'/>
              <Button className='entry-registration-btn' content='Участвовать'/>
          </div>
      </section>
  )
}

export default Entry