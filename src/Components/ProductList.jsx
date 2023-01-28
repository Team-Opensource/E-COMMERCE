import React, { useState, useEffect } from 'react';


function ProductList() {
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let productList;
  if (products.length > 0) {
    productList = products.map((product, index) => (
      
        <li key={index}>
          <div>
            <img src={product.thumbnail} alt="" />
        <h4 class="category">{product.category}</h4>
        <h2 class="title">{product.title}</h2>
        <span class="price">${product.price}</span>
      </div>
      </li>
          
    ));
  } else {
    productList = <p>Loading products...</p>;
  }

  return (
    <ul  id="products" class="productList">
      {productList}
    </ul>
  );
}

export default ProductList;
