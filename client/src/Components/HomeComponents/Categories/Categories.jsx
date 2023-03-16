import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.scss"

 const Categories = () => {
  return (
    <section className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images4.alphacoders.com/595/595710.jpg" alt="" />
                <Link className='link' to={"/products"}> <button>Buy</button></Link>
            </div>
            <div className="row">
                <img src="https://images2.alphacoders.com/532/532415.jpg" alt="" />
                <Link className='link' to={"/products"}> <button>Buy</button></Link>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://t3.ftcdn.net/jpg/04/69/61/84/240_F_469618452_aJn2VSdylViMT70Cl5d1eZjmJrJXrKfM.jpg" alt="" />
                <Link className='link' to={"/products"}> <button>Buy</button></Link>
            </div>
        </div>
        <div className="col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images5.alphacoders.com/966/966883.jpg" alt="" />
                        <Link className='link' to={"/products"}> <button>Buy</button></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnuASCJ3bvK3N3biUbCNc1klt2T3unde-IA&usqp=CAU" alt="" />
                        <Link className='link' to={"/products"}> <button>Buy</button></Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://dqvpi5nku3ph2.cloudfront.net/2018/03/vlcsnap-2018-04-12-14h08m45s057.png" alt="" />
               <Link className='link' to={"/products"}> <button>Buy</button></Link>
            </div>
        </div>
    </section>
  )
}

export default Categories