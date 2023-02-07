import React, { useEffect, useState, useContext } from 'react';
import { FaSort, FaFilter } from 'react-icons/fa'
import CartContext from './Context/CartContext';
import '../Product.css';


const ProductList = () => {
const [products, setProducts] = useState([]);
const [selectedFilter, setSelectedFilter] = useState('All');
const { addItem } = useContext(CartContext);

const fetchProducts = async () => {
try {
const response = await fetch('https://dummyjson.com/products');
const data = await response.json();
setProducts(
data.products
);
} catch (error) {
console.log(error);
}
};

useEffect(() => {
fetchProducts();
}, []);

let filteredProducts = products;

if (selectedFilter === 'Price') {
filteredProducts = products.sort((a, b) => a.price - b.price);
} else if (selectedFilter === 'Category') {
filteredProducts = products.sort((a, b) => a.category.localeCompare(b.category));
}

let productList;

if (filteredProducts && filteredProducts.length > 0) {
productList = filteredProducts.map((product, index) => (
<li key={index} className="productListItem">
<aside className="productImgWrapper">
<img src={product.thumbnail} alt="" className="productImg" />
<button className="cartbtn productCardBtn" onClick={() => addItem(product)}> Add to Cart</button>
</aside>
<div>
<h4 className="category">{product.category}</h4>
<h2 className="title">{product.title}</h2>
<span className="price">${product.price}</span>
</div>
</li>
));
} else {
productList = <p>Loading products...</p>;
}

return (
  <>
    <div className="headingWrapper">
  <h5 className="productHeading">
    Photography /
    <span className="productHeading__emp"> premium photos </span>
  </h5>
  <button className="productBtn">
    <FaFilter />
      </button>
    <div className="desktop__sort"> 
    <FaSort/>
<span>Sort by</span>
  <select value={selectedFilter} onChange={e => setSelectedFilter(e.target.value)}>
  <option value="All">All</option>
  <option value="Price">Price</option>
  <option value="Category">Category</option>
</select>
</div>  
  </div>

<ul id="products" className="productList">
{productList}
</ul>
</>
);
};

export default ProductList;