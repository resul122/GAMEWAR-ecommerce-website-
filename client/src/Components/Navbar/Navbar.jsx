import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

function Navbar() {

    const [open, setOpen] = useState(false)
    const products = useSelector((state)=>state.cart.products)

    return (
        <nav>
            <div className='wrapper1'>
                <div className="leftt">
                    <div className="item">
                        <span>English</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD $</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <div className="rightt">
                    <div className="item">
                        <span>Call 24/7 .</span>
                        <span>+994 50-999-99-99</span>
                    </div>
                </div>
            </div>
            <div className='xett'></div>
            <div className='wrapper2'>
                <div className="left">
                    <Link to={"/"}><img src="https://cdn.shopify.com/s/files/1/0691/5692/9832/files/logo_3_200x@2x.png?v=1674548929" alt=''/></Link>
                </div>
                <div className="center">
                    <div className="items">
                        <Link to={"/products"}>Games</Link>
                    </div>
                    <div className="items">
                        <Link to={"/products"}>Shop</Link>
                    </div>
                    <div className="items">
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                    <div className="items">
                        <Link to={"/blog"}>News</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingBagOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </nav>
    )
}

export default Navbar