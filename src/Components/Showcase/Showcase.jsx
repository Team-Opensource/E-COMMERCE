
import './showcase.css';
import Banner from '../banner/Banner';
// import { useContext } from 'react';
// import CartContext from '../Context/CartContext';
// import Cart from '../Cart'





function Showcase({product}) {
  // const { addItem } = useContext(CartContext);
  return (
    <section className='container showcase'>
      <div className='showcase--upper'>
         <h1 className='showcase_title'>Samurai King Resting</h1>
        {/* <button className='btn showcase_btn_desktop' onClick={() => addItem(product)}>ADD TO CART</button> */}
       
      </div>
      
      <div className='showcase--lower'>
      <Banner/>
      {/* <Cart /> */}
      </div>

    </section>
  )
}

export default Showcase
