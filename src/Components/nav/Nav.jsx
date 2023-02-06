import React from 'react'
import './nav.css'
import flower from '../../Assets/geometric-flowers.png'
import cart from '../../Assets/cart.svg'
function Nav() {
  return (
    <nav className='container nav'>
      <img src={flower} alt="Logo" className='logo' />
      <div className='cart'>
        <img src={cart} alt="" />
        <div className='counter'>
            <span className='number'>1</span>
        </div>
      </div>

    </nav>
  )
}

export default Nav
