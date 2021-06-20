import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <>
          <nav className='nav'>
                <Link to='/'>
                <i class="fas fa-home"></i>
                </Link>
                <Link to='/add'>
                <i class="fas fa-calendar-plus"></i>
                </Link>
                <Link to='/list'>
                <i class="fas fa-calendar-alt"></i>
                </Link>
          </nav>  
        </>
    )
}



