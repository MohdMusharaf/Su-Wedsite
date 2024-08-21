import React, { useState, useEffect } from "react";
import "./mobile.css";
import AddCart from "../Add-Cart/addCart";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import MiddlePoster from "../middle-poster/middleposter";

function Mobile() {
    const [cardProduct, setCardProduct] = useState(null);
    const [previousProducts, setPreviousProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showSecondImage, setShowSecondImage] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [value, setValue] = useState(50); // Initial value set to 50
    const fetchCardProduct = async (productId) => {
        try {
          const response = await axios.get(`http://localhost:7000/api/view/${productId}`);
          setPreviousProducts((prev) => [...prev, cardProduct].filter(Boolean));
          setCardProduct(response.data.targetProduct); 
          console.log(cardProduct);
          
        } catch (error) {
          console.error('Error fetching card product:', error);
        }
      };
    
      const handleAddCartClick = (productId) => {
        setLoading(true);
        setSelectedProductId(productId);
    
        fetchCardProduct(productId);
        setTimeout(() => {
          setLoading(false);
        }, 200); 
      };
    
    
       
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                
                const response = await axios.get('http://localhost:7000/api/products')
                const data = response.data;
                setProducts(data)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProducts();
    }, []);
    
    

    // Timer logic
    useEffect(() => {
        const targetDate = new Date("2024-12-31T23:59:59"); // Replace with your target date

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({
                    days,
                    hours,
                    minutes,
                    seconds,
                });
            } else {
                clearInterval(interval);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Event handlers
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const handleMouseMove = (productId) => {
        setHoveredProduct(productId);
      };
    
      const handleMouseLeave = () => {
        setHoveredProduct(null);
      };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    
    const displayedProducts = products.slice(0, 2);


    
    
      const displayedProducts2 = products.slice(2, 8);
    
      const displayedProducts3 = products.slice(8, 14);
    
    //src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
// src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
//src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"


    return (
        <div>
        <div className="top-deals-div">
            <span className="top-deals">Top Deals Of The Day</span>
        </div>
        <div className="two-moblie-div">
      {displayedProducts.map((product) => (
        <div key={product._id} className="image-mobile-div">
          <div>
            <Link to={`/products/${product._id}`} className="link-tag">
              <button
                onMouseMove={() => handleMouseMove(product._id)}
                onMouseLeave={handleMouseLeave}
                className="btn-mobile"
              >
                <div className="btb-image-change">
                  {hoveredProduct === product._id ? (
                    <div className="image-icon-div">
                      <div>
                        <img
                          src={product.image_url_2}
                          alt="Alternate view of product"
                          className="image-change-mobile"
                        />
                      </div>
                      <div className="icon-mobile-div">
                        <img
                          src="https://tse3.mm.bing.net/th?id=OIP.mnwz82yom-isoIarPAWoSwHaHa&pid=Api&P=0&h=180"
                          alt="Heart symbol"
                          className="heart-icons-mobile"
                        />
                        <img
                          src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
                          alt="Eye symbol"
                          className="heart-icons-mobile"
                        />
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"
                          alt="Eye symbol"
                          className="heart-icons-mobile"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <img
                        src={product.image_url_1}
                        alt="Primary view of product"
                        className="image-change-mobile"
                      />
                    </div>
                  )}
                </div>
              </button>
            </Link>
          </div>
          <div className="moblie-describtion">
            <div className="mobile-headname">
              <h6>{product.product_name}</h6>
            </div>
            <div>
              <div>
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                  alt="Star rating"
                  className="star-icon-moblie"
                />
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                  alt="Star rating"
                  className="star-icon-moblie"
                />
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                  alt="Star rating"
                  className="star-icon-moblie"
                />
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                  alt="Star rating"
                  className="star-icon-moblie"
                />
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                  alt="Star rating"
                  className="star-icon-moblie"
                />
                &nbsp;&nbsp;&nbsp;<span>{product.rating} Reviews</span>
                <p>${product.price}</p>
              </div>

              <div>
                <ul>
                  <li>Screen Size: {product.specifications.screenSize}</li>
                  <li>Operating System: {product.specifications.os}</li>
                  <li>Product Length: {product.specifications.length}</li>
                </ul>
              </div>

              <div className="timer-divs-direction">
                <div className="timer-div"><span>{timeLeft.days}</span ><span className="days-count">Days</span></div>
                <div className="timer-div"><span>{timeLeft.hours}</span><span className="days-count-one">Hour</span></div>
                <div className="timer-div"><span>{timeLeft.minutes}</span><span className="days-count-one">Minu</span></div>
                <div className="timer-div"><span>{timeLeft.seconds}</span><span className="days-count-one">Secs</span></div>
              </div>
            </div>
            <div>
              <input
                type="range"
                id="rangeInput"
                min="0"
                max="100"
                value={value}
                className="range-mobile-sold"
                onChange={handleChange}
              />
              <div>Sold: {value}/100</div>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-dark btn-AddCart-moblie-large"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => handleAddCartClick(product._id)}
              >
                Add Cart
              </button>

              {loading ? <div className="loader"></div> : ""}
              {cardProduct && previousProducts.length > 0 && (
                <AddCart cardProduct={cardProduct} previousProducts={previousProducts} productId={selectedProductId} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

        <MiddlePoster />

        <div>

      <div className="top-deals-div">
        <span className="top-deals">Top Deals Of The Day</span>
        {cardProduct &&
      <div>
        <p>{cardProduct.product_name}</p>
      </div>
}
      </div>

      <div className="six-mobile-div">
        {error && <div className="error-message">{error}</div>}
        {displayedProducts2.map((product) => (
          <div
            className="each-mobile-div"
            style={{ marginLeft: "40px" }}
            onMouseLeave={handleMouseLeave}
            key={product._id}
          >
            <Link to={`/products/${product._id}`} className="link-tag">
              <button
                onMouseMove={() => handleMouseMove(product._id)}
                className="btn-mobile"
              >
                <div className="btb-image-change">
                  {hoveredProduct === product._id ? (
                    <div className="image-icon-div">
                      <img
                        src={product.image_url_2}
                        alt="Second Image"
                        className="six-mobile-image"
                      />
                      <div className="icon-mobile-div">
                        <img
                          src="https://tse3.mm.bing.net/th?id=OIP.mnwz82yom-isoIarPAWoSwHaHa&pid=Api&P=0&h=180"
                          className="heart-icons-mobile"
                          alt="Heart Icon"
                        />
                        <img
                          src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
                          className="heart-icons-mobile"
                          alt="Eye Icon"
                        />
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"
                          className="heart-icons-mobile"
                          alt="Eye Icon"
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={product.image_url_1}
                      alt="First Image"
                      className="six-mobile-image"
                    />
                  )}
                </div>
              </button>
            </Link>

            <div className="decription-sixmobile-div">
              <div>
                <h6>{product.product_name}</h6>
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                      className="star-icon-moblie"
                      alt="Star Rating"
                    />
                  ))}
                  <p>{product.rating} Reviews</p>
                </div>
                <span>${product.price}</span>
                <button 
                  type="button"
                  className="btn btn-dark btm-six-mobiles"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => handleAddCartClick(product._id)}
                >
                  Add Cart
                </button>
                {loading && <div className="loader"></div>}
                {cardProduct && previousProducts.length > 0 && (
                  <AddCart cardProduct={cardProduct} previousProducts={previousProducts} productId={selectedProductId}/>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <MiddlePoster />

    <div>

<div className="top-deals-div">
  <span className="top-deals">On Sale</span>
  {cardProduct &&
<div>
  <p>{cardProduct.product_name}</p>
</div>
}
</div>

<div className="six-mobile-div">
  {error && <div className="error-message">{error}</div>}
  {displayedProducts3.map((product) => (
    <div
      className="each-mobile-div"
      style={{ marginLeft: "40px" }}
      onMouseLeave={handleMouseLeave}
      key={product._id}
    >
      <Link to={`/products/${product._id}`} className="link-tag">
        <button
          onMouseMove={() => handleMouseMove(product._id)}
          className="btn-mobile"
        >
          <div className="btb-image-change">
            {hoveredProduct === product._id ? (
              <div className="image-icon-div">
                <img
                  src={product.image_url_2}
                  alt="Second Image"
                  className="six-mobile-image"
                />
                <div className="icon-mobile-div">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.mnwz82yom-isoIarPAWoSwHaHa&pid=Api&P=0&h=180"
                    className="heart-icons-mobile"
                    alt="Heart Icon"
                  />
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
                    className="heart-icons-mobile"
                    alt="Eye Icon"
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"
                    className="heart-icons-mobile"
                    alt="Eye Icon"
                  />
                </div>
              </div>
            ) : (
              <img
                src={product.image_url_1}
                alt="First Image"
                className="six-mobile-image"
              />
            )}
          </div>
        </button>
      </Link>

      <div className="decription-sixmobile-div">
        <div>
          <h6>{product.product_name}</h6>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                className="star-icon-moblie"
                alt="Star Rating"
              />
            ))}
            <p>{product.rating} Reviews</p>
          </div>
          <span>${product.price}</span>
          <button 
            type="button"
            className="btn btn-dark btm-six-mobiles"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => handleAddCartClick(product._id)}
          >
            Add Cart
          </button>
          {loading && <div className="loader"></div>}
          {cardProduct && previousProducts.length > 0 && (
            <AddCart cardProduct={cardProduct} previousProducts={previousProducts} productId={selectedProductId}/>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
</div>

    </div>
);
    
    
   
}

export default Mobile;
