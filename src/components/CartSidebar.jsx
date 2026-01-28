import React from 'react'
import { useEffect, useState } from "react";
import Style from './CartSidebar.module.css'
import cartImg from '../assets/cart icon.png'
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';


export default function CartSidebar({ onClose, cartItems, increment, decrement, removeItem }) {
  const styleBtn = {
    width: "30px",
    height: "30px",
    borderRadius: "30px",
  }

  const [isClosing, setIsClosing] = useState(false);

  function handleClose() {
    setIsClosing(true);
  }

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, 350); // must match CSS animation duration

      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);


  const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);


  /*
  Key rule:

  useEffect NEVER causes a render by itself
  useEffect runs after rendering, not during rendering.

  After the render finishes, React runs useEffect whose dependencies changed


  A second render only happens if:

  onClose() triggers a state update in the parent


Matching times means:

The component unmounts exactly when the animation finishes

They are not running together, they are coordinated.


NOTE: In the case of onClose being a dependency, Dependency arrays are NOT only for state -

They track any value used inside the effect, including: state, props, functions, and objects.


NOTE:  State updates re-render the component that OWNS the state


React’s rule is simple and strict:

If a value is read inside an effect, it must appear in the dependency array.

Why? Because effects capture values.
  */
  return (
    <div className='vw-100 vh-100 bg-dark bg-opacity-50 position-fixed top-0 start-0' onClick={handleClose} style={{zIndex: "10"}}>
    <div className={`${Style["cart-sidebar"]} ${isClosing ? Style.closeee : Style.opennn} vh-100 bg-white position-fixed top-0 end-0 shadow-lg p-4`} style={{zIndex: "999", width: "30%"}} onClick={(e) => e.stopPropagation()}>
      <div className='sidebar-top mt-1 mb-4'>
        <button className='btn-close position-absolute end-0' style={{fontSize: "10.5px"}} onClick={handleClose}></button>
      </div>
      <div className="sidebar-body">
        {cartItems.length === 0 ? (
          <div className="emptyCart">
            {/* your empty cart UI */}
            <div className="emptyCart">
                <h4 style={{color: "#2b323cff", fontSize: "1.1rem", fontWeight: "600"}}><i className='ri-shopping-bag-3-line fs-5 fw-normal' style={{color: "#dd6604ff"}}></i> &nbsp;Your Cart (0 items)</h4>
                <div className='d-flex flex-column justify-content-center align-items-center' style={{marginTop: "180px", height: "60%"}}>
                  <img src={cartImg} alt="" />
                  <p className='mt-2' style={{color: "#2b323cff", fontSize: "16.5px", fontWeight: "600"}}>Your cart is empty</p>
                  <p style={{color: "#555"}}>Add some delicious items to get started!</p>
                  <Link to="/menu" className={`btn btn-md rounded-3 text-white mt-3 ${isClosing ? Style.closeee : ""}`} onClick={handleClose} style={{backgroundColor: "#dd6604ff", fontSize: "14.8px"}}>Browse Menu</Link>
                </div>
                </div>
          </div>
        ) : (
          <div className="filledCart">
            {cartItems.map(item => (
              <div key={item.id} className={Style["cart-item"]}>
                <img src={item.img} alt={item.foodName} />
                <div>
                  <h6>{item.foodName}</h6>
                  <p>₦{item.price.toLocaleString()}</p>

                  <div className={`quantity ${Style['quantity-btn']}`}>
                    <button onClick={() => decrement(item.id)}>-</button> &nbsp;
                    <span>{item.quantity}</span> &nbsp;
                    <button onClick={() => increment(item.id)}>+</button>
                  </div>
                  </div>
                  
                  <button className={`${Style["delete-btn"]}`} onClick={() => removeItem(item.id)}><i className="ri-delete-bin-line"></i></button>
                
              </div>
            ))}

            <hr />

            <p>Subtotal: ₦{subtotal.toLocaleString()}</p>
            <p>Delivery: ₦500</p>
            <h5>Total: ₦{(subtotal + 500).toLocaleString()}</h5>

            {/* <button className="btn btn-warning w-100 mt-3">
              Proceed to Checkout
            </button> */}
            <Link to="/checkout" className={`${Style["checkout-btn"]} w-100 mt-3`} onClick={handleClose}>Proceed to Checkout</Link>
          </div>
        )}

      </div>

    </div>
    </div>
  )
}





{/* 
  
<Link to="/checkout" className="checkout-btn">
  Proceed to Checkout
</Link>
  

e.stopPropagation();
It tells JavaScript:

“This event ends here.
Do NOT send it to parent elements.”

So the click never reaches the overlay.

e.stopPropagation(); - prevents event bubbling

  */}