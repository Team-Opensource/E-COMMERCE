/* import { useState, useContext } from 'react';
import { CartContext } from './Context/CartContext';
import '../Product.css';


const Product = ({ product }) => {
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
        const { data } = await response.json();
      setProduct(data);
    };

    fetchProducts();
  }, []);
  return (
      <>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      </>
    
  );
}; */

/*function ProductList({product}) {
  const [products, setProducts] = useState([]);
  const { addToCart } = React.useContext(CartContext);

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
          
          <aside className="productImgWrapper">
            <img src={product.thumbnail} alt="" className="productImg" />
            <button className="cartbtn productCardBtn" onClick={() => addToCart(product)}> Add to cart</button>
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
}*/

// export default Product;
