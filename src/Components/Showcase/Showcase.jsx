// import React from 'react'
import './showcase.css'
import Banner from '../banner/Banner'
function Showcase() {
  return (
    <section className='container showcase'>
      <div className='showcase--upper'>
         <h1 className='showcase_title'>Samurai King Resting</h1>
         <button className='btn showcase_btn_desktop'>ADD TO CART</button>
      </div>
      <div className='showcase--lower'>
      <Banner/>
      <button className='btn showcase_btn_mobile'>ADD TO CART</button>
      </div>

    </section>
  )
}

export default Showcase
