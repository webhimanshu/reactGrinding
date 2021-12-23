import React,{useState} from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const [click, setclick] = useState(false);

    return (
        <div className="navbar-container">
           <div className="nav--logo"><Link to="/"> <h1>Devoid</h1></Link></div>
         <ul className={click ?  "nav--menu active" :"nav--menu"}>
         <li><Link  to="/home" onClick={()=>setclick(false)}>Home</Link></li>   
         <li><Link to="/services" onClick={()=>setclick(false)}>Services</Link></li>
         <li><Link to="/products" onClick={()=>setclick(false)}>Products</Link></li>
         <li><Link to="/signup" onClick={()=>setclick(false)}>Sign Up</Link></li>
         </ul>   
         <div className="mobile-menu" onClick={()=>setclick(!click)}>
             <i className={click?'fas fa-times':'fas fa-bars'}></i>
         </div>
        </div>
    )
}

export default Navbar
