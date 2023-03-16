import React from 'react'
import { Link } from 'react-router-dom'
import "./CardsIcons.scss"

function CardsIcons() {
  return (
    <section className='CardsIcons'>
      <div className="iconum">
        <Link to={"/"}>
          <i class="fa-solid fa-truck-moving"></i>
          <div>
            <h3>Free Delivery</h3>
            <h4>Free shipping on all order</h4>
          </div>
        </Link>
        <Link to={"/"}>
          <i class="fa-solid fa-sack-dollar"></i>
          <div>
            <h3>Money Return</h3>
            <h4>Back guarantee in 7 days</h4>
          </div>
        </Link>
        <Link to={"/"}>
          <i class="fa-solid fa-percent"></i>
          <div>
            <h3>Member Discount</h3>
            <h4>On every order over $130.00</h4>
          </div>
        </Link>
        <Link to={"/"}>
          <i class="fa-solid fa-hand-holding-dollar"></i>
          <div>
            <h3>Return Policy</h3>
            <h4>Support 24 hours a day</h4>
          </div>
        </Link>


      </div>

      <div className='cardd'>
        <div class="card">
          <b></b>
          <div class="content">
            <p class="title"><span>Best Action Game</span></p>
            <h1 class="title">DEAD RISING
              ZOMBIES</h1>
              <Link  to={"/products"}><button className='shhop'>Shop Now</button> </Link>
            
          </div>
        </div>

        <div class="card2">
          <b></b>
          <div class="content">
            <p class="title"><span>3D Pixel Racing</span></p>
            <h1 class="title">FAST DRIVE
              RACING</h1>
              <Link  to={"/products"}><button className='shhop'>Shop Now</button> </Link>
            
          </div>
        </div>

      </div>

    </section>
  )
}

export default CardsIcons