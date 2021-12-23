import React from 'react'
import Navbar  from '../ResponsiveLandingPage/Navbar/Navbar'
import '../ResponsiveLandingPage/page.css';
import Card from './Cards/Card';
import Header from './Header/Header';
import HomePage from './Homepage';
import Services from './Services';
import Products from './Products';
import Signup from './Signup';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Footer from './Footer/Footer';
const LandingPage = () => {
    return (
        <>
        <Router>
        <>
        <Navbar/> 
        
         
           <Switch>
             <Route path="/home" exact component={HomePage}/>
             <Route path="/services" exact component={Services}/>
             <Route path="/products" exact component={Products}/>
             <Route path="/signup" exact component={Signup}/>
                <Route path="/" exact  component={Header}>
             
         
          </Route>
           </Switch>
          
        </>
          </Router>
       
          
        </>
    )
}

export default LandingPage
