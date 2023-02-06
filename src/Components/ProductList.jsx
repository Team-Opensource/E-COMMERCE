import React, { useEffect, useState, useContext } from 'react';
import CartContext  from './Context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addItem } = useContext(CartContext);
        
    const fetchProducts = async () => {
        try {
          const response = await fetch('https://dummyjson.com/products');
          const data = await response.json();
          setProducts(
            data.products
        )} catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);

    let productList;
    if (products && products.length > 0) {
        productList = products.map((product, index) => (
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
        <ul id="products" className="productList">
            {productList}
        </ul>
    );
};

export default ProductList;
