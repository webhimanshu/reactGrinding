import React from 'react'
import About from  './About';
import Contact from './Contact';
import Error from './Error';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
const RouterEx = () => {
    return (
        <div>
        <Router>
        <Switch>
        <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
          <Route path="*" component={Error}/>

           </Switch>
           </Router> 
        </div>
    )
}

export default RouterEx

