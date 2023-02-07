import { useContext } from "react";
import "./Cart.css";
import close from '../Assets/close.png'
import CartContext from "./Context/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";


const Cart = () => {
  const { showCart, cart, showHideCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right"}}>
            <img src = {close}
              style={{ cursor: "pointer", width: "3%"  }}
              aria-hidden='true'
              onClick={showHideCart}
            alt = '' />
          </div>
          <div className='cart__innerWrapper'>
            {cart.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <Link to='/checkoutpage'>
              <button className="chk-btn">CHECKOUT</button>
            </Link>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cart.reduce((amount, item) => item.price + amount, 0),
                opts
              )}

              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
