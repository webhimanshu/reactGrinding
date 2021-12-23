import React from 'react'
import Covid from './CovidTracker/Covid';
import LineGraph from './CovidTracker/LineGraph';
import Cart from './ShoppingCart/Cart';
import Navbar from './Navbar/Navbar'
// import RouterEx from './Router/RouterEx'
// import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
//import Form from './Form/Form';
//import Restaurent from './Restaurent/Restaurent';
import Todo from './To-do/Todo';
// import Home from './Navbar/Home';
// import Services from './Navbar/Services';
// import Products from './Navbar/Products';
// import Contact from './Navbar/Contact';
// import LandingPage from './ResponsiveLandingPage/LandingPage';
//import Weather from './WetherApp/Weather';
const App = () => {
    return (
        <>
        {/* <Form/> */}
        {/* Props Examp  */}
    {/* <Restaurent></Restaurent> */}
    <Todo></Todo>
    
{/* Page is for Navbar */}
     {/* <Router>
     <>
     <Navb
         <Switch>
      
         <Route path="/home" exact component={Home}/>
         <Route path="/services" exact component={Services}/>
         <Route path="/products" exact component={Products}/>
         <Route path="/contact" exact component={Contact}/>
         </Switch>

      </>  
     </Router>
    */}

          {/* <RouterEx/> */}



{/* <LandingPage/> */}
          {/* <Weather/> */}
        {/* <Cart/> */}
       {/* <Covid/> */}
        </>
    )
}

export default App
