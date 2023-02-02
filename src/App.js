import React, { useReducer } from 'react';
import './App.css';
import Nav from './Components/nav/Nav';
import Line from './Components/Line/Line';
import Showcase from './Components/Showcase/Showcase';
import About from './Components/about/About';
import { CartContext } from './Components/Context/CartContext';
import { cartReducer } from './Reducer/cartReducer';
import ProductList from './Components/ProductList';

const initialState = {
  cart: []
};

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
     <Nav/>
     <main className='container'>
     <Line/>
     <Showcase/>
     <About/>
     <Line/>
     <ProductList />
     </main>
    </CartContext.Provider>
  );
}

export default App;
