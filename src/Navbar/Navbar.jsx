import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Routes ,Link} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import "./navbar.css";
import Products from "./Products";
import Services from "./Services";

const Navbar = () => 
{
  const [state, setstate] = useState(false)
  return (
    <>
    <div className="navbar">
     <Link to="/" exact> <h1 className="logo">
        React
        <span>
          <i class="fab fa-react"></i>
        </span>
      </h1>
     </Link>
      <ul className={state? 'nav-menu active':'nav-menu'}>
        <li>
          <Link to="/home"  onClick={()=>setstate(false)}>Home</Link>
        </li>
        <li>
          <Link  to="/services" onClick={()=>setstate(false)}>Services</Link>
        </li>
        <li>
          <Link  to="/products" onClick={()=>setstate(false)}>Products</Link>
        </li>
        <li>
          <Link to="/contact" onClick={()=>setstate(false)}>Contact us</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={()=>setstate(!state)}>
         <i className={state ? "fas fa-times":"fas fa-bars"  }               ></i>
        </div>
    </div>
   
  
     </>
  );
};

export default Navbar;
