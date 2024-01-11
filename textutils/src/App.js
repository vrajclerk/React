// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RestaurantList from './components/TiffinProviderlist';
//import Cart from './components/Cart';
import Login from './components/Login';
import './style.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants" component={RestaurantList} />
          {/* <Route path="/cart" component={Cart} /> */}
          <Route path="/login" component={Login} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
