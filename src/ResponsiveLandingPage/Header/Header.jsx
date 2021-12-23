import React from 'react'
import Card from '../Cards/Card';
import Footer from '../Footer/Footer';
import './header.css';
const Header = () => {
    return (
        <>
        <div className="header-container">
    
            <video src="./videos/video-1.mp4"  autoPlay loop muted/>
        
            <div className="content">
            <h1>ADVENTURE AWAITS</h1>
            <p>what are yoy waiting for?</p>
           <div className="header-btns">
               <button className="btns">get started</button>
               <button className="btns ">watch trailer <span><i class="far fa-play-circle"></i></span></button>
           </div>
           </div> 
        </div>
        <Card/>
        <Footer/>
        </>
    )
}

export default Header

