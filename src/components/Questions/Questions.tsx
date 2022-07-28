import React from 'react'
import Accordion from '../UI/Accordion/Accordion'
import './Questions.scss'

const Questions = () => {
  return (
      <section className='questions container'>
          <h2>Вопрос/Ответ</h2>
          <div className='questions-accordions'>
              <Accordion className='questions-accordion' title='Может ли ребёнок заниматься самостоятельно?' content='Non multa, sed multum' />
              <Accordion className='questions-accordion' title='Как происходит оплата?' content='Amīcus est anĭmus unus in duōbus corporĭbus. Amīcus est anĭmus unus in duōbus corporĭbus. Amīcus est anĭmus unus in duōbus corporĭbus. Amīcus est anĭmus unus in duōbus corporĭbus. Amīcus est anĭmus unus in duōbus corporĭbus. Amīcus est anĭmus unus in duōbus corporĭbus. Amīcus est anĭmus unus in duōbus corporĭbus. Amīcus est anĭmus unus in duōbus corporĭbus. Amīcus est anĭmus unus in duōbus corporĭbus. Amīcus est anĭmus unus in duōbus corporĭbus.' />
              <Accordion className='questions-accordion' title='Есть ли гарантии усвоения материала?' content='Litterarum radices amarae, fructus dulces sunt' />
              <Accordion className='questions-accordion' title='С кем будет общаться мой ребёнок?' content='Homo novus' />
              <Accordion className='questions-accordion' title='Каковы принципы обучения?' content='Aliis inserviendo consumor' />
              <Accordion className='questions-accordion' title='Сколько раз в неделю можно заниматься?' content='Finis coronat opus' />
          </div>
          
      </section>
  )
}

export default Questions