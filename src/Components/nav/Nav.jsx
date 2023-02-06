import React from 'react'
import './nav.css'
import flower from '../../Assets/geometric-flowers.png'
import cartImg from '../../Assets/cart.svg'
import { useContext } from "react";
import CartContext from "../Context/CartContext";



function Nav() {
  const { cart, showHideCart } = useContext(CartContext);
  return (
    <nav className='container nav'>
      <img src={flower} alt="Logo" className='logo' />
      <div className='cart'>
      <div className='nav__right'>
        <div className='cart__icon'>
          <img src={cartImg} alt="" style={{ cursor: "pointer" }} aria-hidden='true'
            onClick={showHideCart}
          />
          {cart.length > 0 && (
            <div className='item__count'>
              <span>{cart.length}</span>
            </div>
          )}
        </div>
      </div>

      </div>

    </nav>
  )
}

export default Nav
