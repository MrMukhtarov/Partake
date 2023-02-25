import React from 'react'
import './AboutLink.css'
import {NavLink} from 'react-router-dom'

const AboutLink = () => {
  return (
    <div className='AboutLink'>
        <div className="all d-flex">
            <div className="left col-lg-6">
                <NavLink to='/'>Press</NavLink>
            </div>
            <div className="right col-lg-6">
                <NavLink to='/'>Ingredients</NavLink>
            </div>
        </div>
    </div>
  )
}

export default AboutLink