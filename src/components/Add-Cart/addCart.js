import './addCart.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ViewCart from '../view-Cart/viewCart';

function AddCart({ cardProduct, previousProducts = [] }) {
  const [cartData, setCartData] = useState([]);
  // const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const freeShippingThreshold = 300;
  const navigate = useNavigate();

 
  useEffect(() => {
    
    const combinedData = [
      ...(cardProduct ? [cardProduct] : []),
      ...previousProducts,
    ];
    setCartData(combinedData);
  }, [cardProduct, previousProducts]);

  // const increment = (price) => {
  //   setCount((prevCount) => prevCount + 1);
  //   setValue((prevValue) => prevValue + price);
  // };

  // const decrement = (price) => {
  //   if (count > 0) {
  //     setCount((prevCount) => prevCount - 1);
  //     setValue((prevValue) => prevValue - price);
  //   }
  // };  

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setLoading(true);
    setValue(newValue);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const deleteProduct = (index) => {
    const updatedCart = [...cartData];
    updatedCart.splice(index, 1);
    setCartData(updatedCart);
  };

  if (cartData.length === 0) {
    return null; // Don't render if no products exist
  }

  const handleViewCard = async () => {
    setLoading(true);
    navigate('/view-cart', { state: { cartData } });
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };


  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="addCartModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content modal-move-ac">
          <div className="modal-header">
            <h6 className="modal-title" id="addCartModalLabel">Shopping Cart</h6>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          {cartData.map((product, index) => (
            <div className="grid-add-card" key={index} style={{ border: "1px solid #3498db" }}>
              <div className="image-container">
                <img src={product.image_url_2} alt="Product" className="mobile-add-card-image" />
              </div>
              <div className="middle-view-details">
                <div>
                  <h6>{product.product_name}</h6>
                  <strong>${product.price}</strong>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button className="count-change" onClick={() => decrement(product.price)}>-</button>
                  <span>{count}</span>
                  <button className="count-change" onClick={() => increment(product.price)}>+</button>
                </div>
              </div>
              <div className="last-view-details">
                <button className="remove-data" onClick={() => deleteProduct(index)}>
                  <img src="https://tse4.mm.bing.net/th?id=OIP.evA7XlgQqjlnYaYZJgjLaAHaII&pid=Api&P=0&h=180" alt="Remove Product" className="last-image-view" />
                </button>
              </div>
            </div>
          ))}

          <div className="modal-body view-details-cart">
            {loading ? <div className="loader"></div> : <p></p>}
            <div style={{ padding: '20px' }}>
              <input className="range-input" type="range" min={0} max={300} value={value} onChange={handleInputChange} />
              {value >= freeShippingThreshold && <p style={{ marginLeft: '-100px', color:"orangered" }}>Congratulations! Shipping is free.</p>}
            </div>
            <p><span className="subtotal-ac" style={{ marginLeft: '-100px'}}>Subtotal:</span><span className="span-value-ac"> ${value}</span></p>
            <div className="btn-addCart-div" style={{ marginLeft: '-100px'}}>
              <button type="button" className="btn btn-light btn-view-ac"  onClick={handleViewCard }>View Cart</button>
              
              <button type="button" className="btn btn-dark btn-addcart-ac" >Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCart;