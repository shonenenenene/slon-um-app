import React, { FC } from 'react'
import SvgSelector from '../SvgSelector'
import './HeaderAnimation.scss'

const Animation:FC = () => {
  return (
      <div className='header-animation'>
          <div className='header-animation-container'>
            <div className='space'>
                <img src='./img/header-space.png' alt='Космос' />
             </div>
            <div className='girl'>
                <SvgSelector id='girl'/>
            </div>
            <div className='planes'>
                <SvgSelector id='planes'/>
            </div>  
            <div className='plane'>
                 <img src='./img/header-plane.svg' alt='Самолёт'/> 
            </div>
            <div className='atom'>
                <SvgSelector id='atom'/>
              </div>
            <div className='ball'>
                <SvgSelector id='ball'/>
            </div>
            <div className='elephant'>
                <SvgSelector id='elephant'/>
            </div>
            <div className='rocket'>
                <SvgSelector id='rocket'/>
            </div>  
            <div className='plus'>
                <SvgSelector id='plus'/>
              </div>
            <div className='planet3'>
                <SvgSelector id='planet3'/>
            </div>
            <div className='planet2'>
                <SvgSelector id='planet2'/>
            </div>  
            <div className='planet1'>
                <SvgSelector id='planet1'/>
            </div>
            <div className='lamp'>
                <SvgSelector id='lamp'/>
            </div>
            <div className='stars'>
                <SvgSelector id='stars'/>
            </div>
            <div className='divide'>
                <SvgSelector id='divide'/>
            </div>
            <div className='alarm'>
                <SvgSelector id='alarm'/>
            </div>
            <div className='num-one'>
                <SvgSelector id='one'/>
            </div>
            <div className='num-two'>
                <SvgSelector id='two'/>
            </div>
            <div className='palette'>
                <SvgSelector id='palette'/>
            </div>
          </div>
      </div>
  )
}

export default Animation