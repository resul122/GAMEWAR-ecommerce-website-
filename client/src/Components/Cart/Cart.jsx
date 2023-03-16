import { DeleteOutline } from '@mui/icons-material'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeRequest } from '../../makeRequest'
import { removeItem, resetCart } from '../../redux/cartReducer'
import "./Cart.scss"


const Cart = () => {
  const dispatch = useDispatch();
 const products = useSelector((state)=>state.cart.products)

 const totalPrice = () => {
  let total = 0;
  products.forEach((item) => (total += item.quantity * item.price));
  return total.toFixed(2);
 };

 const stripePromise = loadStripe(
  "pk_test_51LHR3zFCuc6xOBcwoKE34wwkHPm9dNfgvkKVLRWCnGFTSiysGOQgB9nUoRFtfHrNFFopgUfrmTczeYsNXsjSEhNS00zoQ0PUQl"
);

 const handlePayment = async () => {
  try {
    const stripe = await stripePromise;
    const res = await makeRequest.post("/orders", {
      products,
    });
    await stripe.redirectToCheckout({
      sessionId: res.data.stripeSession.id,
    });

  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className='cart'>
      <h1>Product in your cart</h1>
      {products?.map(item => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price" >
             {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutline className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart