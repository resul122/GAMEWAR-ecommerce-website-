import { Facebook, Google, Instagram, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'

import "./MiniContact.scss"

export const MiniContact = () => {
  return (
    <div className='miniContact' >
<div className="wrapper">
    <span>BE IN TOUCH WITH US</span>
</div>
<div className="mail">
    <input type="text"placeholder='Enter your email...' />
    <button>Send</button>
</div>
<div className="icons">
    <Facebook/>
    <Instagram/>
    <Twitter/>
    <Google/>
    <Pinterest/>
</div>
  
    </div>
  )
}
