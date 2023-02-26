import React from 'react'
import './PressIquire.css'
import {NavLink} from 'react-router-dom'

const PressIquire = () => {
  return (
    <div className='PressIquire'>
        <div className="all">
            <div className="box">
                <p>For press inquiries, contact us here 
                    <NavLink className='ms-5' to='/'>CONTACT</NavLink>
                </p>
            </div>
        </div>
    </div>
  )
}

export default PressIquire