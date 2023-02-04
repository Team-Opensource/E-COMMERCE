// import "./Nav.css";
import { useContext } from "react";
import CartContext from "./Context/CartContext";
import cartImg from '../Assets/cart.svg'

const Nav = () => {
  const { cart, showHideCart } = useContext(CartContext);

  return (
    
      
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
    
  );
};

export default Nav;


























/*import { useContext } from 'react';
import  CartContext  from './Context/CartContext';

const CartCounter = () => {
const { cart } = useContext(CartContext);

return (
<div>
        {cart.length > 0 && (
            <div className='counter'>
                {cart.length}
           </div> 
        )}
</div>
);
};

export default CartCounter */

