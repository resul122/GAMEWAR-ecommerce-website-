import React from 'react'
import { Link } from 'react-router-dom'
import "./CardsIcons.scss"

function CardsIcons2() {
  return (
    <section className='CardsIcons2'>
    
      <div className='cardd'>
        <div class="card">
          <b></b>
          <div class="content">
          <p class="title"><span>Die Hard Trilogy</span></p>
            <h1 class="title">DBULLET HELL
MONDAY</h1>
<Link  to={"/products"}><button className='shhop'>Shop Now</button> </Link>

            
          </div>
        </div>

        <div class="card2">
          <b></b>
          <div class="content">
          <p class="title"><span>World Of Tanks</span></p>
            <h1 class="title">TANK HEROES
OFFICER</h1>
<Link  to={"/products"}><button className='shhop'>Shop Now</button> </Link>
          
          </div>
        </div>

      </div>

    </section>
  )
}

export default CardsIcons2