import React, { FC } from 'react'
import './Certificate.scss'

const Certificate: FC = () => {
  return (
      <section className='certificate'>
          <div className='container certificate-container'>
              <div className='certificate-description'>
                  <h2>Выдаём <span>дипломы</span> участникам</h2>
                  <p className='p2'>Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка — дипломы получат все дети!</p>
                  <p className='p2'>Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, дополнительно вышлем его на e-mail.</p>
                  <p className='p2'>Со слоном к победам напролом!</p>
              </div>
              <div className='certificate-document'>
                  <img src='./img/certificate-document.png'/>
              </div>
          </div>
      </section>
  )
}

export default Certificate