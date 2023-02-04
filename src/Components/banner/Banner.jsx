import React, { useEffect, useState } from 'react'
import './banner.css'
// API fetch, async/await and axios
// useContext contextAPI
// props drilling
// useRef,useMemo
function Banner() {
  const [image, setImage] = useState("");
  const [id, setId] = useState(1);
  // let id = 1
  const fetchImage = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setImage(data);

    // console.log(data);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setId(id + 1);
      fetchImage(id);
    },  21000);
    return () => clearInterval(interval);
    // fetchImage()
  }, [id]);

  return (
    <div className="banner">
      <img src={image.thumbnail} alt="" className="banner_image" />

      <span className="banner_caption">Photo of the Day</span>
    </div>
  );
}

export default Banner;
