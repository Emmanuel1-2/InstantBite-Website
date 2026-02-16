// import Style from './InstantBiteFooter.module.css';
// import instantLogo from '../assets/food icon.png'

// function InstantBiteFooter() {

//     return (
//         <div className={`${Style["instantbite-footer"]} container-fluid  text-start`} style={{marginTop: "2.5rem", backgroundColor: "#2b323cff", paddingTop: "4rem", paddingBottom: "3rem"}}>
//             <div className="container">
//                 <div className="row justify-content-center gx-5 mb-5">
//                 <div className="col-md-4 mb-3 mt-2" style={{marginRight: "150px", marginLeft: "0px"}}>
//                     <a className="navbar-brand d-flex align-items-center  fw-bold" style={{color: "#faf3e0", fontSize: "30px"}} href="#"><img src={instantLogo} alt="instantBite" width="30" height="30" className="me-2"/>instant<span className="text-danger fw-bolder">Bite</span></a>
//                     <p className='py-2' style={{color: "#faf3e0", fontSize: "16px", fontWeight: "500"}}>Fresh, fast, and made with care — bringing delicious moments straight to your doorstep.</p>
//                     <div className={`${Style["social-icons"]} d-flex mt-3`}>
//                         <i className="ri-instagram-line fs-3 me-3"></i>
//                         <i className="ri-facebook-fill fs-3 me-3"></i>
//                         <i className="ri-twitter-fill fs-3 me-3"></i>
//                         <i className="ri-linkedin-fill fs-3 me-3"></i>
//                     </div>
//                 </div>

//                 <div className="col-md-3 mb-3 mt-2" style={{marginRight: "50px"}}>
//                     <h5 style={{color: "#faf3e0", fontSize: "22px", marginBottom: "20px", fontWeight: "700"}}>Quick Links</h5>
//                     <div className={`${Style["support-links"]} d-flex flex-column gap-2`}>
//                         <a href="#" className='text-decoration-none'>Home</a>
//                         <a href="#" className='text-decoration-none'>Menu</a>
//                         <a href="#" className='text-decoration-none'>Order Now</a>
//                         <a href="#" className='text-decoration-none'>Contact</a>
//                     </div>
//                 </div>

//                 <div className="col-md-3 mb-3 mt-2">
//                     <h5 style={{color: "#faf3e0", fontSize: "22px", marginBottom: "20px", fontWeight: "700"}}>Support</h5>
//                     <div className={`${Style["support-links"]} d-flex flex-column gap-2`}>
//                         <a href="#" className='text-decoration-none'>FAQ</a>
//                         <a href="#" className='text-decoration-none'>Privacy Policy</a>
//                         <a href="#" className='text-decoration-none'>Terms of Service</a>
//                         <a href="#" className='text-decoration-none'>Careers</a>
//                     </div>
//                 </div>
                
//             </div>

//             <hr style={{color: "#faf3e0", marginBottom: "2rem"}} />
            
            
            
            
//             <p style={{color: "#666", fontSize: "16px", margin: 0, textAlign: "center"}}>© 2026 InstantBite. All rights reserved. Designed by Vincent Lawrence.</p>
//             </div>
            
//         </div>
//     )
// }

// export default InstantBiteFooter;




import Style from './InstantBiteFooter.module.css';
import instantLogo from '../assets/food icon.png';

function InstantBiteFooter() {
  return (
    <div
      className={`${Style["instantbite-footer"]} container-fluid`}
    >
      <div className="container">
        <div className="row gy-4 text-sm-start text-md-start">

          {/* Logo Section */}
          <div className="col-12 col-md-6 col-lg-4 me-lg-5">
            <a
              className="navbar-brand d-flex align-items-center justify-content-sm-start justify-content-md-start fw-bold"
              style={{ color: "#faf3e0", fontSize: "30px" }}
              href="#"
            >
              <img src={instantLogo} alt="instantBite" width="30" height="30" className="me-2"/>
              instant<span className="text-danger fw-bolder">Bite</span>
            </a>

            <p className={`${Style.tagline}`}>
              Fresh, fast, and made with care — bringing delicious moments straight to your doorstep.
            </p>

            <div className={`${Style["social-icons"]} d-flex justify-content-sm-start justify-content-md-start mt-3`}>
              <i className="ri-instagram-line fs-3 me-3"></i>
              <i className="ri-facebook-fill fs-3 me-3"></i>
              <i className="ri-twitter-fill fs-3 me-3"></i>
              <i className="ri-linkedin-fill fs-3"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 col-lg-3 ms-lg-5">
            <h5 className={Style.footerTitle}>Quick Links</h5>

            <div className={`${Style["support-links"]} d-flex flex-column gap-2`}>
              <a href="#">Home</a>
              <a href="#">Menu</a>
              <a href="#">Order Now</a>
              <a href="#">Contact</a>
            </div>
          </div>

          {/* Support */}
          <div className="col-12 col-md-3 col-lg-3 ms-lg-5">
            <h5 className={Style.footerTitle}>Support</h5>

            <div className={`${Style["support-links"]} d-flex flex-column gap-2`}>
              <a href="#">FAQ</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Careers</a>
            </div>
          </div>

        </div>

        <hr className={Style.footerLine} />

        <p className={Style.copyright}>
          © 2026 InstantBite. All rights reserved. Designed by Vincent Lawrence.
        </p>

      </div>
    </div>
  );
}

export default InstantBiteFooter;

/*
useLocation is React Router that gives you the current path (/, /login, /contact, etc.).
useLocation is a React Router hook that gives you information about the current URL your app is on.
It returns an object like this :
{
  pathname: "/contact",   // current route
  search: "?q=food",      // URL query string
  hash: "#section",        // anchor hash
  state: { from: "/" }     // optional state passed via navigation
}

In short:
useLocation tells your component: "Hey, which page am I on right now?"


IF YOU WANT FOOTER ONLY ON SOME PAGES

import { useLocation } from "react-router-dom";

const location = useLocation();

{location.pathname !== "/login" && <Footer />}



To hide footer on multiple routes:

const location = useLocation();

const hideFooterRoutes = ["/login", "/register"];    - Routes where footer should be hidden 

{!hideFooterRoutes.includes(location.pathname) && <Footer />}


alternative but longer code:
location.pathname !== "/login" && location.pathname !== "/register" && <Footer />



Footer will NOT render if current path is in hideFooterRoutes


| Page URL                                                     | `location.pathname` |
| ------------------------------------------------------------ | ------------------- |
| [https://yoursite.com/](https://yoursite.com/)               | `/`                 |
| [https://yoursite.com/contact](https://yoursite.com/contact) | `/contact`          |
| [https://yoursite.com/login](https://yoursite.com/login)     | `/login`            |

So, location.pathname always tells your app: “which page am I on right now?”
*/