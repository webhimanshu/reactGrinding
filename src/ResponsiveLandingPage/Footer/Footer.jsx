import React,{useState} from 'react'
import './footer.css';
const Footer = () => {
  const [email,setemail]=useState("");
  const handlechange=(e)=>
  {
  setemail(e.target.value)
  }
  
    return (
        <div className="footer-container">
            <section className="footer-subscription">
              <p className="heading">join the adventure newsletter to receive our best vacation deals</p>
              <p className="text">You can unsubscribe ant time</p>
              <div className="input-areas">
            <form >
                <input type="email" name="email" placeholder="Your Email" className="footer-input" value={email} onChange={handlechange}/>
                <button className="btn-style">subscribe</button>
            </form>
              </div>
            </section>
            <div className="footer-data">
            <div className="footer-items">
              <h2>About Us</h2>
              <a href="">How it works</a>
              <a href="">Testemonials</a>

              <a href="">Career</a>
              <a href="">Investors</a>
              <a href="">Terms of Services</a>
            </div>
            <div className="footer-items">
              <h2>Contact Us</h2>
              <a href="">Instagram</a>
              <a href="">Facebook</a>

              <a href="">Youtube</a>
              <a href="">Twitter</a>

            </div>
            <div className="footer-items">
              <h2>Videos</h2>
              <a href="">Contact</a>
              <a href="">Supports</a>

              <a href="">Destinations</a>
              <a href="">Sponsorship</a>

            </div>
            <div className="footer-items">
              <h2>Social Media</h2>
              <a href="">Submit video</a>
              <a href="">Ambassadors</a>

              <a href="">Agency</a>
              <a href="">Influencer</a>

            </div>
             
            </div>
        </div>
    )
}

export default Footer
