import React from 'react'
import './Afisha.css'
import left from '../../Photos/Left.png'
import right from '../../Photos/Right.png'
import Button from '../button/Button'


export default function Afisha({img, userName, title, imgDisplay}) {
    return (
        <>
            <div className='w-100 d-flex justify-content-between afisha-box align-items-center mb-4'>
                <div className='d-flex align-items-center'>   
                    <img src={img} alt={userName} style={{display:{imgDisplay}}} className='userImg'/>
                    <h3 className='userName mb-0 ms-3'>{userName}</h3>
                    <p className='userTitle mb-0 ms-3'>{title}</p>
                </div>
                <div className='btn-box d-flex'>
                    <Button img={left}/><Button img={right}/>
                </div>
            </div>
        </>
    )
}
