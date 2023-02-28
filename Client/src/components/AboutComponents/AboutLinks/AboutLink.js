import React from 'react'
import './AboutLink.css'
import {NavLink} from 'react-router-dom'

const AboutLink = () => {
  return (
    <div className='AboutLink'>
        <div className="all d-flex">
            <NavLink to='/press' className="left col-lg-6">
              Press
            </NavLink>
            <NavLink to='/' className="right col-lg-6">
                Ingredients
            </NavLink>
        </div>
    </div>
  )
}

export default AboutLink