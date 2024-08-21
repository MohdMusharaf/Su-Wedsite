import React, { useEffect, useState } from 'react'
import './viewcart.css'
import Header from '../first-header/header';
import SecondHeader from '../second-header/secondHead';
import ThirdHeader from '../Third-Header/thirdHeader';
import Footer from '../footer/footer';
import { useLocation } from 'react-router-dom';

function ViewCart(  ) {

  
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(300);
    const freeShippingThreshold = 500;
    const [country, setCountry] = useState('US');

    
      
      const location = useLocation();
      const [cartData, setCartData] = useState(location.state?.cartData || []);


  const increment = () => {
    setCount(count + 1);
    setAmount(amount*2)
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const decrement = () => {
    if(count>1){
        setCount(count - 1);
        setAmount(amount/2)
    }
  };

  const deleteViewCard = (index) => {
    
    const updatedCartData = cartData.filter((_, i) => i !== index);
    setCartData(updatedCartData);
  };

  const amountToFreeShipping = Math.max(freeShippingThreshold - amount, 0);

    return(
        <div>
           <div className='header-div'>
    
    <Header/>
    <SecondHeader />
    <ThirdHeader />
    {/* <button onclick="loadContent('page1.html')">Load Page 1</button> */}
    </div>
            <div className='Your-cart-div'>
                <div>
                    <h3>Your Cart</h3>
                </div>
                <div>
                    <span >Home </span><span className='light-font'>/ Your Cart</span>
                </div>
            </div>

            {/*  */}

            <div className='back-color-set'>
                    <p className=''>Please, hurry Someone has placed an order on one of the items you have in cart. Product are limited, checkout with 04:46s</p>
            </div>

            {/*  */}

<div className='view-cart-table'>
  <div class="container table-container">                         
  <table class="table">
    <thead>
      <tr>
        <th>PRODUCT</th>
        <th>Quantity</th>
        <th>Subtotal:</th>
      </tr>
    </thead>
    <tbody>
    {cartData.map((product, index) => (
                <tr key={index} className='row-body-view'>
                  <td className='display-column-one'>
                    <img src={product.image_url_2} alt='Product' className='image-table-view' />
                    <p>{product.product_name}</p>
                  </td>
                  <td className='display-column-two'>
                    <div className='increment'>
                      <button className="btn btn-light" onClick={decrement}>-</button>
                      <input type="text" className="text-count" value={count} readOnly />
                      <button className="btn btn-light" onClick={increment}>+</button>
                    </div>
                  </td>
                  <td className='display-column-three'>
                    <strong>${amount}</strong>
                    <button className="remove-data" onClick={() => deleteViewCard(index)}>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <img src="https://tse4.mm.bing.net/th?id=OIP.evA7XlgQqjlnYaYZJgjLaAHaII&pid=Api&P=0&h=180" alt="Remove Product" className="last-image-view" />
                      </button>
                  </td>
                </tr>
              ))}


      <tr>
        <td>
        <button type="button" class="btn btn-dark  delete-shopping">Continue Shopping</button>
        </td>
        <td>

        </td>
        <td>
        <button type="button" class="btn btn-dark delete-shopping-de ">Delete All</button>
        </td>
      </tr>
      
    </tbody>
 
  </table>
  

  

  </div  >
  <div className='side-view-table'>
      <div>
      <form>
  <div class="form-group input-range-div">
    <input type="range" class="form-control-range range-value" id="formControlRange" />
    <label for="formControlRange">Spend ${amountToFreeShipping.toFixed(2)} more and get Free Shipping</label>
  </div>
    </form>
      </div>

      <p className='crat-toatals'>Cart totals</p>

      <div className="subtotal-view-side">
      <p><span className='subtatoal-ac'>Subtotal:</span><span className='amount-side-view'> ${amount}</span></p>

      </div>

      <div className='input-form-view'>
        <h4>Estimate shipping rates:</h4>
        <div className='country-div'>
        <h5>Country </h5>
        <select id="country" value={country} onChange={handleCountryChange} className='select-countrt'>
        <option value="">Select a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="UK">United Kingdom</option>
        <option value="AU">Australia</option>
        <option value="DE">Germany</option>
      </select>
        </div>

        <div className='country-div'>
        <h5>Country </h5>
        <select id="country" value={country} onChange={handleCountryChange} className='select-countrt'>
        <option value="">Select a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="UK">United Kingdom</option>
        <option value="AU">Australia</option>
        <option value="DE">Germany</option>
      </select>
        </div>

        <div className='country-div'>
        <h5>Zip/Postal Code </h5>
        <input  type='text' placeholder='Zip/Postal Code' className='select-countrt'  />
        <button type="button" class="btn btn-dark calculate-shipping">CALCULATE SHIPPING RATES</button>
        </div>
      </div>

      <div className='country-div'>
        <h6>Coupon </h6>
        <p>Coupon code will work on checkout page.</p>
        <input  type='text' placeholder='Coupon' className='select-countrt'  />
        
        </div>

        <div>
          <div className='div-save'>
            <span className='margin-span-save'>You save in total</span><span className='amount-saved'>${30}</span>
          </div>

          <div className='div-save'>
            <span className='margin-span-save'>Order Totals</span><span className='amount-saved'>${amount}</span>
          </div>
        </div>


        <div className='last-div-view'>
          <p>Taxes and shipping calculated at checkout</p>
          <div class="form-group form-check">
             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">I agree with Terms & Conditions</label>

            <br/>
            <button type="button" class="btn btn-secondary btn-last-view">Light</button><br/>
            <button type="button" class="btn btn-primary btn-last-view">Shop</button><br/>
            <button type="button" class="btn btn-dark btn-last-view">Pay</button>
      </div>
        </div>
  </div>
</div>
<Footer />

        </div>
    )
}
export default ViewCart;