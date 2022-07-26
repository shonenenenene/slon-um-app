import React, { FC } from 'react'
import './Description.scss'

const Description:FC = () => {
    return (
        <div className='container description-container'>
            <p className='p1 description'>Компания <span className='p-style-bold'>СлонУм</span> – проводит конкурс для детей в котором могут участвовать ребята <span className='p-style-accent'>всех возрастов!</span> Номинации в которых можно победить, есть возможность проявить себя во всех направлениях и даже <span className='p-style-accent'>без художественных способностей.</span></p>
        </div>

  )
}

export default Description