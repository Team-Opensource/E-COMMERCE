import { useState, useEffect } from 'react';
import '../Product.css';

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
      
        <li key={index} className="productListItem">
          {/* <div className="productLabel">
         Best Seller
          </div> */}
          <aside className="productImgWrapper">
            <img src={product.thumbnail} alt="" className="productImg" />
            <button className="cartbtn productCardBtn"> Add to cart</button>
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
    <ul  id="products" className="productList">
      {productList}
    </ul>
  );
}

export default ProductList;
