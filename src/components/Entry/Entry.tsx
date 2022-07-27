import React from 'react'
import Button from '../UI/Button'

const Entry = () => {
  return (
      <section className='container entry'>
          <div className='entry-sale'></div>
          <div className='entry-registration'>
              <h2>Зарегистрируйтесь, чтобы участвовать</h2>
              <div className='entry-registration-inputs'>
                  
              </div>
              <div className='entry-registration-toggle'>

              </div>
              <Button className='entry-registration-btn' content='Участвовать'/>
          </div>
      </section>
  )
}

export default Entry