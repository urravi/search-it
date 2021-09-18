import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Main from './components/Main';
import Products from './components/Products';
import Error from './components/Error';
import Product_Details from './components/Product_Details';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />

        <Switch>
            <Route exact path='/search-it' component={HomePage} />
            <Route exact path='/Home' component={HomePage} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/search' component={Products} />
            <Route exact path='/productDetails' component={Product_Details} />
            <Route exact path='/error' component={Error} />
            <Redirect to="/error"/>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
