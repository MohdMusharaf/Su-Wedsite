import React, { useState } from 'react';
import "./secondHeader.css";
import Login from "../login/login";
import Signup from "../signup/signup";
import AddCart from '../Add-Cart/addCart';
import SixOther from '../six-moblie/sixanother';
import { Link ,useNavigate} from 'react-router-dom';


function SecondHeader() {
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [category, setCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
   
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    
    
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      
    }, 200);
    
    
    const query = new URLSearchParams({
      product_name: searchTerm,
      category: category !== 'All Categories' ? category : '', 
    }).toString();

    try {
      const response = await fetch(`http://localhost:7000/api/search?${query}`);
      const data = await response.json();
      
      setResults(data);
      navigate('/search', { state: { results: data } });
      console.log(results);
      
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  

  return (
    <div className="secondHeader-div">
      <div className="logo-div">
        <img
          src="https://res.cloudinary.com/dhpkv1tec/image/upload/v1722513876/natural%20places/SGU_SHOP_LOGO_TRANSPARENT_lxgqrq.png"
          className="logo-image"
        />
      </div>
      <div className="white-search-div">
        <div class="form-group">
          <select class="form-control select-border" id="sel1" value={category} onChange={handleCategoryChange}>
  <option value="all">All Categories</option>
  <option value="samsung">Samsung</option>
  <option value="apple">Apple</option>
</select>
        </div>

        <div class="form-group input-search-div ">
          <input
            type="text"
            class="form-control form-border"
            id="usr"
            placeholder="Search..."
            value={searchTerm}
          onChange={handleSearchTermChange}
          />
        </div>
        <div>
          <button type="submit" class="btn btn-search" onClick={handleSearch}>
            Search
          </button>
          
        </div>
        {loading ? <div className="loader"></div> : ""}
          
      </div>
      

      <div className="icons-div">
        
        <div className="icons-inner-head">
          <div>
            <img
              src="https://cdn4.iconfinder.com/data/icons/mayssam/512/user-512.png"
              className="icons-users-head"
            />
          </div>
          <div>
            <button
              type="button"
              class="btn-Login"
              data-toggle="modal"
              data-target="#myModal"
            >
              <sapn className="text-style">Login</sapn>
              <br />
              <span className="account-style">Account</span>
            </button>
          </div>

          
        </div>
        <div className="icons-inner-head">
          <div>
            <img
              src="https://www.pinclipart.com/picdir/big/2-24947_heart-clipart-clipart-simple-white-heart-icon-png.png"
              className="icons-users-head"
            />
          </div>
          <button
              type="button"
              class="btn-Login"
              
              data-target="#myModal"
            >
              <div className='favorite-div'>
              <sapn className="text-style">Favorite</sapn>
              <br />
              <span className="account-style">My Wishlist</span>
              </div>
            </button>
          </div>
        <div class="modal" id="myModal">
        <div class="modal-dialog">
      <div class="modal-content">
          <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
        <div class="modal-header">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className={`button-border ${showLogin ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setShowLogin(true)}>Login</button>
            <button type="button" className={`button-border ${!showLogin ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setShowLogin(false)}>Signup</button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {showLogin ? <Login /> : <Signup />}
      </div>
          </div>
        </div>
        </div>
        </div>
      </div>
        <div className="icons-inner-head">
          <div>
            <img
              src="https://images.freeimages.com/fic/images/icons/1700/2d/512/cart.png?ref=findicons"
              className="icons-users-head"
            />
          </div>
          <div>
            <button type="button" class="btn-Login" data-target="#myModal">
              <sapn className="text-style">Your Cart</sapn>
              <br />
              <span className="account-style">$0.00</span>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SecondHeader;
