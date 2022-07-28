import React from 'react'
import Button from '../UI/Button'
import Checkbox from '../UI/Checkbox/Checkbox'
import Input from '../UI/Input'
import './Subscribe.scss'

const Subscribe = () => {
  return (
      <section className='subscribe'>
          <h2>Подпишись на нашу рассылку</h2>
          <p className='p2 subscribe-p'>Обещаем присылать только самое важное и интересное :)</p>
          <div>
              <Input className='subscribe-input' placeholder='Email' />
              <Button className='subscribe-btn' content='Отправить' />
          </div>
          <Checkbox className='subscribe-checkbox'/>
      </section>
  )
}

export default Subscribe