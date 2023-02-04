import React from 'react'
import './nav.css'
import flower from '../../Assets/geometric-flowers.png'
import CartCounter from '../CartCounter'


function Nav() {
  return (
    <nav className='container nav'>
      <img src={flower} alt="Logo" className='logo' />
      <div className='cart'>
        
        <CartCounter />
        {/* <div className='counter'>
        {cart.length}
        </div> */}
      </div>

    </nav>
  )
}

export default Nav
