import { useContext } from "react";
import "./CartItem.css";
import CartContext from "./Context/CartContext";
import formatCurrency from "format-currency";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };
  return (
    <li className='CartItem__item'>
      <img src={item.thumbnail} alt='' />
      <div>
        {item.title} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item.id)}>
        Remove
      </button>
      
    </li>
  );
};

export default CartItem;