import Style from './GetInTouch.module.css';

function GetInTouch() {

    return (
        <div className={`${Style["get-in-touch"]} container mt-4 p-5`}>
            <h2 style={{textAlign: "center", fontSize: "42px", marginTop: "10px", marginBottom: "18px", fontWeight: "800", color: "#2b323cff"}}>Get in <span style={{color: "#ff9900"}}>Touch</span></h2>
            <p style={{textAlign: "center", marginBottom: "60px", fontSize: "22px", color: "#666"}}>Questions? Feedback? We'd love to hear from you!</p>

            <div className="row justify-content-center">
                <div className="col-md-3 mb-3">
                    <div className={`${Style["contact-card"]} rounded-5 bg-white p-4 text-center`}>
                        <i className="ri-map-pin-line fs-1 mb-3" style={{color: "#ff9900"}}></i>
                        <h5 style={{color: "#12100e", marginTop: "20px", marginBottom: "10px", fontSize: "20px", fontWeight: "700"}}>Location</h5>
                        <p style={{color: "#666", fontSize: "16px", margin: 0}}>Capital Building, 332 Ikorodu-Ososun Rd, Maryland, Lagos, Nigeria</p>
                    </div>    
                </div>

                <div className="col-md-3 mb-4">
                    <div className={`${Style["contact-card"]} rounded-5 bg-white p-4 text-center`}>
                        <i className="ri-phone-line fs-1 mb-3" style={{color: "#ff9900"}}></i>
                        <h5 style={{color: "#12100e", marginTop: "20px", marginBottom: "10px", fontSize: "20px", fontWeight: "700"}}>Phone</h5>
                        <p style={{color: "#666", fontSize: "16px", margin: 0}}>+234 (803) 455-6789</p>
                        <p style={{color: "#666", fontSize: "16px"}}>+234 (804) 465-6743</p>
                    </div>    
                </div>

                <div className="col-md-3 mb-4">
                    <div className={`${Style["contact-card"]} rounded-5 bg-white p-4 text-center`}>
                        <i className="ri-time-line fs-1 mb-3" style={{color: "#ff9900"}}></i>
                        <h5 style={{color: "#12100e", marginTop: "20px", marginBottom: "10px", fontSize: "20px", fontWeight: "700"}}>Hours</h5>
                        <p style={{color: "#666", fontSize: "16px", margin: 0}}>Monday - Friday: 9am - 8pm</p>
                        <p style={{color: "#666", fontSize: "16px"}}>Saturday - Sunday: 10am - 6pm</p>
                    </div>    
                </div>

                <div className="col-md-3 mb-4">
                    <div className={`${Style["contact-card"]} rounded-5 bg-white p-4 text-center`}>
                        <i className="ri-mail-line fs-1 mb-3" style={{color: "#ff9900"}}></i>
                        <h5 style={{color: "#12100e", marginTop: "20px", marginBottom: "10px", fontSize: "20px", fontWeight: "700"}}>Email</h5>
                        <p style={{color: "#666", fontSize: "16px", margin: 0}}>Monday - Friday: 9am - 8pm</p>
                        <p style={{color: "#666", fontSize: "16px"}}>Saturday - Sunday: 10am - 6pm</p>
                    </div>    
                </div>
                
            </div>
        </div>
    )
}

export default GetInTouch;






/*
<form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows={4} placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className={`btn ${Style["submit-btn"]} w-100`}>Send Message</button>
                    </form>

*/