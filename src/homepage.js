import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import FindId from './components/FindID/findbyid';
import App from './App';
import ViewCart from './components/view-Cart/viewCart';
import SixMoblie from './components/six-moblie/sixmoblie';
import SecondHeader from './components/second-header/secondHead';
import SearchResults from './components/six-moblie/searchresult';
import axios from 'axios';
import AddCart from './components/Add-Cart/addCart';

function Homepage() {

 

  

  return (
    
    <div>
     
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products/:id" element={<FindId />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/view-cart" element={<ViewCart />} />
      </Routes>
    
    </div>
  );
}

export default Homepage;
