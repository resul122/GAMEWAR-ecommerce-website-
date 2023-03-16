import React from 'react'
import "./Footer.scss"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="item">
          <h1>Contact Us</h1>
          <div className='iconItem'>
            <LocationOnIcon />
            <span>
              Gamewar - Video Game Store 33 New Montgomery St. Ste 750 San Francisco</span>
          </div>
          <div className='iconItem'>
            <CallIcon />
            <span>(+994) 50-999-99-99</span>
          </div>
          <div className='iconItem'>
            <MailIcon />
            <span>RRTWAR@gmail.com</span>
          </div>
        </div>
        <div className="item">
          <h1>Quick Links</h1>
          <span>Search</span>
          <span>Delivery Information</span>
          <span>About Us</span>
          <span>Privacy Policy</span>
          <span>Shipping</span>
        </div>
        <div className="item">
          <h1>Information</h1>
          <span>Shipping & Refund</span>
          <span>Terms And Conditions</span>
          <span>Sitemap</span>
          <span>Policy For Buyers</span>
          <span>Policy For Sellers</span>
        </div>
        <div className="item">
          <h1>Our Newsletter</h1>
          <p>There are many variations of passages of form humour, or randomised</p>
          <input placeholder='   Your email ' type="text" />
          <div className="media">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="xett"></div>
      <div className="bottom">
        <div className="left">
          <span>© 2023,</span><Link to={"/"}> GameWar - Video Game Store </Link>
        </div>
        <div className="right">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1920px-Visa_2021.svg.png" alt='' />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/989px-Mastercard-logo.svg.png" alt=''/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png" alt=''/>
          <img src="https://icon-library.com/images/amex-icon/amex-icon-22.jpg" alt=''/>
        </div>

      </div>
    </footer>
  )
}

export default Footer