import React from 'react'
import { Link } from 'react-router-dom'
import "./Special.scss"

function Special() {
  return (
    <section className='special'>
      <h1>Special Category</h1>
      <div className="cartlar">
        <div className="cartim">
          <Link to={"/products"}>
        
            <img src="https://cdn.shopify.com/s/files/1/0691/5692/9832/files/category-img-1_086a04ab-aba1-404d-aad1-b4aea0af4f42_446x550.jpg?v=1671527575" alt="" />
            <h2>Latest Assasins Creed Game</h2>
            <Link to={"/products"}>Shop Now</Link>
            </Link>
        </div>
        <div className="cartim">
            <Link to={"/products"}>
          <img src="https://cdn.shopify.com/s/files/1/0691/5692/9832/files/category-img-2_446x550.jpg?v=1670927694" alt="" />
          <h2>New Battlefield 4 Game</h2>
            <Link to={"/products"}>Shop Now</Link></Link>
        </div>
        <div className="cartim">
          <Link to={"/products"}>
          <img src="https://cdn.shopify.com/s/files/1/0691/5692/9832/files/category-img-3_446x550.jpg?v=1670927695" alt="" />
          <h2>Witcher 3 Remasted</h2>
          <Link to={"/products"}>Shop Now</Link>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Special