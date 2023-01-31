import React, { useEffect, useState } from 'react'
import './banner.css'
// API fetch, async/await and axios
// useContext contextAPI
// props drilling
// useRef,useMemo
function Banner() {
  const [image, setImage] = useState('')
  
  
  const fetchImage = async () =>{
    const res = await fetch('https://dummyjson.com/products/1')
    const data = await res.json()
    setImage(data)
    // console.log(data)
  }
  useEffect( () =>{
    fetchImage()
  },[])

  return (

    <div className='banner'>
      <img src={image.thumbnail}  alt=""  className='banner_image'/>
      <span className='banner_caption'>Photo of the Day</span>
    </div>
  )
}

export default Banner












































// import { useState, useEffect } from "react"
// import './banner.css'
// function Banner() {
//     const [image, setImage]= useState([])
//     const fetchImage = async () =>{
//         const res = await fetch('https://dummyjson.com/products/1') 
//         const data = await res.json()
//         setImage(data)
//         console.log(data)
//     }
//     useEffect(() =>{
//         fetchImage()  
//     }, [])

//   return (
//     <div className="banner">
//       <img src={image.thumbnail} alt="photo of the day" className="banner_image" />
//       <span className="banner_caption">Photo of the day</span>
//     </div>
//   )
// }

// export default Banner
