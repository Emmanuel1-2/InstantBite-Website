import clsx from "clsx";
import classes from './HeroSection.module.css'
import chicken from '../assets/fried chicken.png'
import parfait from '../assets/parfait.png'
import spice from '../assets/spices.png'
import { Link } from "react-router-dom";


function HeroSection(props) {
    // className={classes.world-rate}  ❌ Wrong!
    // className={classes["world-rate"]}  RIGHT!
    //NOTE: In CSS Modules, class names with hyphens (-) cannot be accessed with dot notation. JavaScript reads it as subtraction. If a className has hyphens, fix it this way -  <div className={style["world-rate"]}>

    /*
    Adding hyphens to custom css classNames are important so as to avoid colliding with a Bootstrap class and most importantly, create uniqueness and specifity to the className so the effect of the custom css is applied.

    Important Note: Your custom CSS must come after Bootstrap in index.html or imports.
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="custom.css">


    
    */


    return(
        <section className="hero-section bg-body-secondary d-flex justify-content-between align-items-center px-5" style={{height: "90vh", paddingTop: "70px"}}>
            <div className="text-content w-50">
                <div  className={clsx(classes["world-rate"], "")}>
                    <h4 style={{color: "#dd6640"}}><i className="ri-star-fill me-3"></i>World's #1 Fastest Food Delivery Service</h4>
                </div>
                <div className="main-hero-text my-4">
                    <h1 style={{fontWeight: "700", fontSize: "42px", color: "#2b323cff"}}>Craving Food? <br />Get It Delivered <br />Instantly</h1>
                </div>
                <div className="hero-description mb-4">
                    <p>Experience the ultimate convenience with instantBite - your-go-to app for fast, reliable food delivery from your favorite local restaurants. Satisfy your hunger in just a few taps! </p>
                </div>
                <div className={`${classes["hero-buttons"]} d-flex gap-3`}>
                    <button className="btn btn-lg border-0 text-white" style={{backgroundColor: "#dd6604ff"}}>Order Now <i className="ri-arrow-right-long-line"></i></button>
                    <Link to="/menu" className="btn btn-outline-secondary btn-lg">Explore Menu</Link>
                </div>

                <div className="details d-flex gap-4 mt-5">
                <div className="delivery d-flex gap-2 mt-4">
                    <div className={`${classes["d-icon"]} `}>
                        <i className="ri-car-line"></i>
                    </div>
                    <div className="d-text">
                        <h6>Fast Delivery</h6>
                        <p style={{fontSize: "13px"}}>Get your food delivered in under 30 minutes.</p>
                    </div>
                </div>

                <div className="ratin d-flex gap-2 mt-4">
                    <div className={`${classes["r-icon"]}`}>
                        <i className="ri-star-fill"></i>
                    </div>
                    <div className="r-text">
                        <h6>5 Star Rating</h6>
                        <p style={{fontSize: "13px"}}>From over 10,000 satisfied customers.</p>
                    </div>
                </div>
                <div className="free d-flex gap-2 mt-4">
                    <div className={`${classes["f-icon"]}`}>
                        <i className="ri-shield-check-line"></i>
                    </div>
                    <div className="f-text">
                        <h6>Secure Payment</h6>
                        <p style={{fontSize: "13px"}}>Your payment information is safe with us.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="position-relative w-50">
            <div className="img-content d-flex justify-content-center align-items-center">
                <img src="https://img.freepik.com/premium-photo/tasty-traditional-meal-with-rice-chicken-veggies-plate_711700-32017.jpg?uid=R225444039&ga=GA1.1.1001886661.1764853609&semt=ais_hybrid&w=740&q=80" alt="" className={`${classes["hero-img"]} img-fluid rounded-3 w-75 h-75`}/>
            </div>

            <div className="mini box-shadow-medium bg-white rounded-3 p-3 position-absolute z-1" style={{left: "50px", top: "-20px"}}>
            <img width="40px" src={chicken} alt=""  className={`${classes["hero-icons"]}`}/>
            </div>

            <div className="mini box-shadow-medium bg-white rounded-3 p-3 position-absolute z-1" style={{right: "40px", bottom: "-20px"}}>
            <img width="40px" src={parfait} alt="" className={`${classes["hero-icons"]}`}/>
            </div>

            <div className="mini box-shadow-medium bg-white rounded-3 p-3 position-absolute z-1" style={{right: "40px", top: "200px"}}>
            <img width="40px" src={spice} alt="" className={`${classes["hero-icons"]}`}/>
            </div>
            </div>

            
        </section>
    )
}

export default HeroSection;


/*
To apply bootstrap css to a custom css with hyphen in React: 
1. 
<div className={`${classes["world-rate"]} d-inline-block px-3 py-2`}>
  <h4>World's #1 Fastest Food Delivery Service</h4>
</div>

2. install clsx -  npm install clsx

import clsx from "clsx";

<div
  className={clsx(
    classes["world-rate"],
    "d-inline-block px-3 py-2"
  )}
>


NOTE: Use ../ only for your own files, not dependencies (npm packages)

instantBite = project-root



Special note about public in React:

In Vite / CRA, you usually don’t import from public using paths.

Instead, you reference assets like this:

<img src="/images/logo.png" />


Because public is served as the root (/).
*/