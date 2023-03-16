
import React  from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slide.scss"
import { Link } from 'react-router-dom';

function Slide() {
    return (
        <Carousel className='carsl' showThumbs={false} autoPlay={true} emulateTouch={true} infiniteLoop={true} showArrows={true}>
            <div className='carsImg'>
                <img src="https://cdn.shopify.com/s/files/1/0691/5692/9832/files/main-banner-1_1903x.jpg?v=1670925107;" alt=''/>
                
                <div className="metn">
                <h1>Best Shooting Game</h1>
                    <h2>SHADOWGUN WAR GAMES</h2>
                    <button> <Link to={"/products"}>Shop now</Link> </button>
                    
                </div>
            </div>
            <div className='carsImg'>
                <img src="https://cdn.shopify.com/s/files/1/0691/5692/9832/files/main-banner-2_1903x.jpg?v=1671086943;" alt=''/>
                
                <div className="metn">
                    <h1>Star Wars Up Coming</h1>
                    <h2>GAME GUIDE UNOFFICIAL</h2>
                    <button><Link to={"/products"}>Shop now</Link> </button>
                </div>
            </div>

        </Carousel>
    )
}

export default Slide