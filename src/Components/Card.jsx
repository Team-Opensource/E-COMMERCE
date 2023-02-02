import React from 'react'
import { FaSort,  FaFilter } from 'react-icons/fa'
import ProductList from './ProductList'
import '../Product.css';


function Card() {
 return(
<div>
<section className="product">

<div className="container">

<div className="headingWrapper">
  <h5 className="productHeading">
    Photography /
    <span className="productHeading__emp"> premium photos </span>
  </h5>
  <button className="productBtn">
    {/* <img src="../assets/filter.svg" /> */}
    {/* <FaAssets/> */}
    <FaFilter/>
  </button>

  <div className="desktop__sort">
    {/* <img src="../assets/sort.svg" /> */}
    <FaSort/>
    <span>Sort by</span>

    <select>
      <option>Price</option>
      <option>Category</option>
    </select>

  </div>
         </div>
        
           <ProductList />
        

</div>
</section>
</div>
   
)

 }

export default Card

//     </section>
//     </section>

/*

<section className="product">
        <div className="container">
          <div className="headingWrapper">
            <h5 className="productHeading">
              Photography /
              <span className="productHeading__emp"> premium photos </span>
            </h5>
            <button className="productBtn">
              <img src="../assets/filter.svg" />
            </button>
            <div className="desktop__sort">
              <img src="../assets/sort.svg" />
              <span>Sort by</span>
              <select>
                <option>Price</option>
                <option>Category</option>
              </select>
            </div>
          </div>
          <ul id="products" className="productList">
          </ul>
        </div>
      </section>
*/