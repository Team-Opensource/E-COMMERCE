import { useContext } from "react";
import React from "react";
import CartContext from "./Context/CartContext";
import "./CheckoutPage.css";
import formatCurrency from "format-currency";


const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };

  return (
    <div className="body">

      <div className="bdy-2">
        <h2>Checkout</h2>
        <div>
          <h3>Billing Information</h3>
          <form>
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" name="fullName" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" />
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" />
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code:</label>
              <input type="text" id="zipCode" name="zipCode" />
            </div>
          </form>
        </div>
        
        
        <div className="checkout">
          <div className="checkout-container">
            <h3 className="heading-3">Credit Card Details</h3>
            <label>Cardholder's Name</label><br />
            <input type="text" name="name" />
            <br />
            <label>Card Number</label><br />
            <input type="number" name="card_number" />
            <div className="row">
              <div className="col">
                  <label>Expiration Date</label> <br />
                <input type="month" name="exp_date" />
              </div>
              <div className="col">
                <label>CVV</label> <br />
                <input type="number" name="cvv" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Order Summary</h3>
          <ul className="li">
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.thumbnail} alt='' />
                {item.name} - {formatCurrency(item.price, opts)}
        
              </li>
            ))}
          </ul>
          <div className="total" >
            Total:{" "}
            {formatCurrency(
              cart.reduce((amount, item) => item.price + amount, 0),
              opts
            )}
          </div>
        </div>
        <div className="check-btn">
          <button className="checkout-btn" type="button">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;





