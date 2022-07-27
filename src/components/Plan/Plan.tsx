import React, { FC } from 'react'
import './Plan.scss'

const Plan: FC = () => {
  return (
      <section className='plan'>
        <div className='plan-container container'>
          <h2>Пошаговый <span>план</span></h2>
          <div className='flying-plane'>
            <img src='./img/flying-plane.svg'/>
          </div>
          <div className='plan-dashed-line'>
            <img src='./img/dashed-line.svg' />
          </div>
          <div className='plan-step-1'>
            <div className='circle'>1</div>
            <p className='p2'>Зарегистрируйтесь на конкурс <a href='' target='_blank'>Здесь</a></p>
          </div>
          <div className='plan-step-2'>
            <div className='circle'>2</div>
            <p className='p2'>Выполните все условия конкурса</p>
          </div>
          <div className='plan-step-3'>
            <div className='circle'>3</div>
            <p className='p2'>Загрузите рисунок <a href='' target='_blank'>Здесь</a> или в Личном кабинете</p>
          </div>
        </div>
      </section>
  )
}

export default Plan