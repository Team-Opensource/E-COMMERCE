import React from "react";
import "./about.css";
import { useState, useEffect } from "react";

function ImageContent() {
  const [images, setImage] = useState([]);

  const fetchImage = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=3&skip=12");
    const { products } = await res.json();
    setImage(products);
    // const {products} = data
    console.log(products);
  };
  useEffect(() => {
    fetchImage();
  }, []);

  //    console.log(products)
  return (
    
      <div className="images_content">
        {images.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt="" className="images" />
          </div>
        ))}
      </div>
      
    
  );
}

export default ImageContent;
