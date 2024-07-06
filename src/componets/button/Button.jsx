import React from 'react'
import './Button.css'


export default function Button({img}) {
  return (
   
    <div>
        <button className='border-0 corusel-btn'><img src={img} alt="carosuel btn" /></button>
    </div>
  )
}
