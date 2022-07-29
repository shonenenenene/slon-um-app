import React, { FC } from 'react'
import BenefitsCard from '../UI/BenefitsCard/BenefitsCard'
import './Benefits.scss'

const Benefits:FC = () => {
  return (
      <section className='benefits'>
          <div className='benefits-container container'>
                <h2>Для чего <span>нужно</span> участвовать</h2>
                <div className='benefits-cards'>
                    <BenefitsCard src='./img/star.png' alt='звезда' content='Шанс занять 1 место. В вашем городе и по всей России' />
                    <BenefitsCard src='./img/winnie.png' alt='победитель' content='Развитие самостоятельности + свободное время для      родителей ;)' />
                    <BenefitsCard src='./img/certification.png' alt='сертификат' content='Персональный диплом в разных номинациях    каждому участнику' />
                    <BenefitsCard src='./img/gift.png' alt='подарок' content='Призы и скидки для подписчиков и авторизованных     пользователей' />
                    <BenefitsCard src='./img/email.png' alt='почта' content='Бесплатный диплом на email — через 1 день после конкурса' />
                    <BenefitsCard src='./img/publishing.png' alt='публикация' content={<>Публикация работ победителей во ВКонтакте. <a href='#' target='_blank'>Подписывайтесь!</a></>} />
              </div>
          </div> 
      </section>
  )
}

export default Benefits