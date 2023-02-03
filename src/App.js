import React, { useReducer } from 'react';
import './App.css';
import Nav from './Components/nav/Nav';
import Line from './Components/Line/Line';
import Showcase from './Components/Showcase/Showcase';
import About from './Components/about/About';
import  CartContext  from './Components/Context/CartContext';
import { cartReducer } from './Reducer/cartReducer';
import Card from './Components/Card';
import Cart from './Components/Cart';

const initialState = {
  showCart:false,
  cart: [],
};

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addItem = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: 'SHOW_HIDE_CART' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };
  return (
    <CartContext.Provider value={{
      cart: state.cart,
      showCart: state.showCart,
      addItem,
      showHideCart,
      removeItem,
      dispatch
    }}>
      <Nav />
      <Cart />
     <main className='container'>
     <Line/>
     <Showcase/>
     <About/>
     <Line/>
     <Card />
     </main>
    </CartContext.Provider>
  );
}

export default App;
