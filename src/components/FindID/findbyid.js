import React, { useState, useEffect } from "react";
import "./findbyid.css";
import AddCart from "../Add-Cart/addCart";
import { FaHeart, FaExchangeAlt, FaShareAlt } from "react-icons/fa";
import SixMoblie from "../six-moblie/sixmoblie";
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios';

function FindId() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [cardProduct, setCardProduct] = useState(null);
  const [previousProducts, setPreviousProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
    const [remainingProducts, setRemainingProducts] = useState([]);
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductAndOthers = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/products/${id}`);
                const data = response.data;
                console.log(data);
                
                setSelectedProduct(data.selectedProduct);
                setRemainingProducts(data.remainingProducts);
            } catch (error) {
                console.error('Error fetching product and remaining products:', error);
            }
        };

        fetchProductAndOthers();
    }, [id]);


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
  
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const renderContent = () => {
    switch (activeTab) {
        case 'description':
            return <div className="onclick-btn-render"> <p>iPad Air with a vibrant 10.9-inch Liquid Retina display. Breakthrough Apple M1 chip for faster performance, making iPad Air super-powerful for creativity and mobile gaming. Get Touch ID, an advanced camera, lightning-fast 5G2 and Wi-Fi 6, a USB-C port, and support for the Magic Keyboard and Apple Pencil (2nd generation).</p><br/>
                    <img src="https://cdn.shopify.com/s/files/1/0836/9845/0750/files/img_content_1.jpg?v=1699289844" className="deccription-image-render" /><br/><br/>
                    <h6>Work wonders With ease</h6><br/>
                    <p>There are so many things you can do with iPad and all the amazing apps designed for it. Now App Library automatically organizes those apps for you. And new widgets let you see information at a glance, right on your Home Screen. iPad is the world’s best note-taking device. And now Notes goes system‑wide with Quick Note, a fast and easy way to get to a note no matter what you’re doing. Highlight text in Safari or add a link from an app, and you’ll see a Quick Note thumbnail next time you visit the site, taking you right to what you were viewing before. And if you make a Quick Note on your iPad, it will be on your iPhone and Mac.</p>
                    </div>;
        case 'additionalInfo':
            return <div >
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th>Color</th>
                        <td>Space Black, Silver, Red</td>
                    </tr>
                    <tr>
                        <th>Product Type</th>
                        <td>New, Renewed, Refurbished, Used</td>
                    </tr>
                    <tr>
                        <th>Storage</th>
                        <td>64GB, 512GB, 2TB</td>
                    </tr>
                    <tr>
                        <th>Brand</th>
                        <td>Apple</td>
                    </tr>
                    <tr>
                        <th>Display</th>
                        <td>10.9‑inch Liquid Retina display with True Tone</td>
                    </tr>
                    <tr>
                        <th>Capacity</th>
                        <td>128GB, 256GB, 512GB</td>
                    </tr>
                    <tr>
                        <th>Chip (CPU)</th>
                        <td>Apple M1 with 8-core CPU, 8-core GPU</td>
                    </tr>
                    <tr>
                        <th>Camera and Video</th>
                        <td>12MP – 4K Video</td>
                    </tr>
                    <tr>
                        <th>Front Camera</th>
                        <td>12MP Ultra Wide front camera with Center Stage and Smart HDR 3</td>
                    </tr>
                    <tr>
                        <th>Battery Life</th>
                        <td>Up to 10 hours on Wi‑Fi, Up to 9 hours using cellular data network</td>
                    </tr>
                    <tr>
                        <th>In the Box</th>
                        <td>iPad Air, USB-C Charge Cable (1 meter), 20W USB-C Power Adapter</td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>9.74 inches (247.6 mm)</td>
                    </tr>
                    <tr>
                        <th>Width</th>
                        <td>7.02 inches (178.5 mm)</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi + Cellular model</td>
                    </tr>
                    <tr>
                        <th>Mobile Network</th>
                        <td>5G</td>
                    </tr>
                </tbody>
            </table>
        </div>;
        case 'shippingReturn':
            return  <div>
            <h5>Shipping</h5>
            <ul >
                <li >Complimentary ground shipping within 1 to 7 business days</li>
                <li>In-store collection available within 1 to 7 business days</li>
                <li>Next-day and Express delivery options also available</li>
                <li>Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items</li>
                <li>See the delivery FAQs for details on shipping methods, costs, and delivery times</li>
            </ul><br/>
            <h5>Returns and Exchanges</h5>
            <ul>
                <li>Easy and complimentary, within 14 days</li>
                <li>See conditions and procedure in our return FAQs</li>
            </ul>
        </div>
        case 'reviews':
            return <div>
              <p>This is the Reviews content.</p>
              <div class="rating">
                  <span class="rating-score">5.00</span> out of 5
                  <span class="rating-reviews">based on {selectedProduct.rating} reviews</span>
            </div>
            </div>
        default:
            return null;
    }
};

  

  const [selectedPrice,setSelectedPrice] =useState('')
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(0);
  const increment = () => {
    setCount(count + 1);
    setValue((prevValue) => prevValue + price)
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setValue((prevValue) => prevValue - price);
    }
  };

  const handleMouseMove = () => {
    setShowSecondImage(true);
  };

  const handleMouseLeave = () => {
    setShowSecondImage(false);
  };
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
        // Set the countdown to 0 if the target date is in the past
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

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const displayedProducts = remainingProducts.slice(0, 6);

  return (
    <div>
    <div className="find-by-id">
    {selectedProduct && (
  <div className="display-findbyid">
    <div className="one-product-details">
      <button
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="btn-mobile"
      >
        <div className="btb-image-change">
          {showSecondImage ? (
            <div>
              <img
                src={selectedProduct.image_url_2 || "fallback_url_here"}  // Second image URL or fallback
                alt="Second Image"
                className="single-image"
              />
            </div>
          ) : (
            <div>
              <img
                src={selectedProduct.image_url_1 || "https://demo-morata.myshopify.com/cdn/shop/products/products_5_1.jpg?v=1697644653"}
                alt="First Image"
                className="single-image"
              />
            </div>
          )}
        </div>
      </button>
    </div>

    <div className="image-direction-row">
      <div className="column-small-div">
        <img
          src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_2.jpg?v=1697644653"
          className="image-small-div"
          alt="Thumbnail 1"
        />
      </div>
      <div className="column-small-div">
        <img
          src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_1.jpg?v=1697644653"
          className="image-small-div"
          alt="Thumbnail 2"
        />
      </div>
      <div className="column-small-div">
        <img
          src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_2.jpg?v=1697644653"
          className="image-small-div"
          alt="Thumbnail 3"
        />
      </div>
    </div>

    <div className="product-details-findid">
      <h3>{selectedProduct.product_name || "Apple iPhone 11 Pro 256GB Space Gray – Unlocked"}</h3>

      <div>
        {/* Star icons and review count */}
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
          className="star-icon-mobile"
          alt="Star"
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
          className="star-icon-mobile"
          alt="Star"
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
          className="star-icon-mobile"
          alt="Star"
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
          className="star-icon-mobile"
          alt="Star"
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
          className="star-icon-mobile"
          alt="Star"
        />
        &nbsp;&nbsp;<span className="review">({selectedProduct.rating} Reviews)</span>
        &nbsp;&nbsp;&nbsp;<span>!8 sold in last 24 hours</span>
      </div>

      <div className="amount-div-findid">
        <div className="amounttext">
          <h1>${selectedProduct.price}</h1> 
          <span className="amount-strik">${(selectedProduct.price ) + 15}</span>
        </div>
        <div>
          <span className="discount-display">Discount: $10.00 (5%)</span>

          <div>
            <ul>
              <li>Screen Size 10.9 inch</li>
              <li>Operating System iOS 14.0</li>
              <li>Product Length 9.74 inch</li>
            </ul>
          </div>

          <div>
            <img
              src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-eye-icon-png-image_4252570.jpg"
              className="eye-icons-findby"
              alt="Eye Icon"
            />
            <span>16 people are viewing this right now</span>
          </div>

          <div className="timer-div-left">
            <div className="hurry-time">
              <h6>Hurry up! Sale ends in:</h6>
            </div>
            <div className="time-left-findid">
              <div className="each-timer">
                {timeLeft.days} <span className="each-time-day">Days</span>
              </div>
              <div className="each-timer">
                {timeLeft.hours} <span className="each-time-day">Hours</span>
              </div>
              <div className="each-timer">
                {timeLeft.minutes} <span className="each-time-day">minutes</span>
              </div>
              <div className="each-timer">
                {timeLeft.seconds} <span className="each-time-day">seconds</span>
              </div>
            </div>
          </div>

          <div>
            <span>Hurry Up! Only 9 Left in Stock!</span>
            <div className="btn-addcart-product-number">
              <div className="btn-product-increase">
                <button onClick={decrement} className="btn-change-count">
                  -
                </button> &nbsp;
                <span>{count}</span>&nbsp;&nbsp;
                <button onClick={increment} className="btn-change-count">
                  +
                </button>
              </div>
              
              <div className="addcart-properties">
                <button 
                  type="button"
                  className="btn btn-dark btn-addcart-findid"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => handleAddCartClick(selectedProduct._id)}
                >
                  Add Cart
                </button>
          
                
              </div>
              
            </div>
          </div>

          <div>
            <div className="container1">
              <label className="checkbox-container">
                <input type="checkbox" id="terms-checkbox" />
                I agree with the&nbsp; <u>terms and conditions</u>
              </label>
              <button className="shop-pay-button">Buy With Shop Pay</button>
            </div>
          </div>
        </div>

        <div className="icons-findbyid-div">
          <div style={{ marginLeft: "20px" }}>
            <FaHeart />
            <span>Add Wishlist</span>
          </div>
          <div className="each-icon-inner">
            <FaExchangeAlt />
            <span>Add Compare</span>
          </div>
          <div style={{ marginLeft: "300px" }}>
            <FaShareAlt />
            <span>Share</span>
          </div>
        </div>

        <div className="duration-div">
          Availability: In Stock <br />
          SKU: N/A <br />
          Vendor: Apple <br />
          Categories: BestSelling, Featured Products <br />
          Tags: Smart Phones & Tablets
        </div>

        <div className="guarantee-pay">
          <h5>Guarantee safe & Secure checkout</h5>
          <div className="pay-image-div">
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/amazon-92e856f82cae5a564cd0f70457f11af4d58fa037cf6e5ab7adf76f6fd3b9cafe.svg" className="pay-image" alt="Amazon Pay"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/american_express-12858714bc10cdf384b62b8f41d20f56d8c32c1b8fed98b662f2bfc158dcbcf0.svg" className="pay-image" alt="American Express"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" className="pay-image" alt="Apple Pay"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/bitcoin-e41278677541fc32b8d2e7fa41e61aaab2935151a6048a1d8d341162f5b93a0a.svg" className="pay-image" alt="Diners Club"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/dankort-a92b320b417b7c123265e1e4fe134935ac76ec7e297be9b02a5ef76b182a29cc.svg" className="pay-image" alt="ELO"/>
            
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/diners_club-16436b9fb6dd9060edb51f1c7c44e23941e544ad798282d6aef1604319562fba.svg" className="pay-image" alt="Amazon Pay"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/discover-cc9808e50193c7496e7a5245eb86d5e06f02e2476c0fe70f2c40016707d35461.svg" className="pay-image" alt="American Express"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/dogecoin-40c07eb6559d1c47a2ac893d14a4d27cdfad770df3413fb3e49ab51a18c8961d.svg" className="pay-image" alt="Apple Pay"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/dwolla-afe7aa3f31ed9f5aaf470e495448ee3f17a139aa8692a50d117571174726ce8d.svg" className="pay-image" alt="Diners Club"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/forbrugsforeningen-99ffce51f2e166271aa285e1497d7feecec72a562c2b97298e6bc3504931f99d.svg" className="pay-image" alt="ELO"/>
            
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/interac-1d5902001e368e264bc690113c9c1784b6a91876b38e478644c57e181b7c44fa.svg" className="pay-image" alt="Amazon Pay"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg" className="pay-image" alt="American Express"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/jcb-ab0f5a1739704f1ab039f19ac8c28895af5c39a3f54ee9b748ea051986b0bd36.svg" className="pay-image" alt="Apple Pay"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/klarna-389801c6056cb5600b4f05f72ebc2c58e4947688c6c4f5e6ccea41f7973d3a28.svg" className="pay-image" alt="Diners Club"/>
            <img src="https://demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/klarna-389801c6056cb5600b4f05f72ebc2c58e4947688c6c4f5e6ccea41f7973d3a28.svg" className="pay-image" alt="ELO"/>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


      <div className="tabbed-interface">
            <div className="tab-buttons">
                <button
                    className={activeTab === 'description' ? 'active' : ''}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </button>
                <button
                    className={activeTab === 'additionalInfo' ? 'active' : ''}
                    onClick={() => setActiveTab('additionalInfo')}
                >
                    Additional Information
                </button>
                <button
                    className={activeTab === 'shippingReturn' ? 'active' : ''}
                    onClick={() => setActiveTab('shippingReturn')}
                >
                    Shipping & Return
                </button>
                <button
                    className={activeTab === 'reviews' ? 'active' : ''}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews
                </button>
            </div>
           
        </div>

        <div className="tab-content">
                {renderContent()}
            </div>


            <div className="in-findid-sixmobile">
            <div>
      
      <div className="top-deals-div">
        <span className="top-deals">Related</span>
      </div>

      <div className="six-mobile-div">
        
        { displayedProducts.map((product) => (
          
            <div
              className="each-mobile-div"
              style={{ marginLeft: "40px" }}
              onMouseLeave={handleMouseLeave}
            >
              <div>
              {/* <Link to={`/products/${product._id}`} className="link-tag" key={product._id}> */}
                <button
                  onMouseMove={() => handleMouseMove(product._id)}
                  className="btn-mobile"
                  onClick={() => navigate(`/products/${product._id}`)}
                >
                  <div className="btb-image-change">
                    {hoveredProduct === product._id ? (
                      <div className="image-icon-div">
                        <div>
                          <img
                            src={product.image_url_2}
                            alt="Second Image"
                            className="six-mobile-image"
                          />
                        </div>
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
                      <div>
                        <img
                          src={product.image_url_1}
                          alt="First Image"
                          className="six-mobile-image"
                        />
                      </div>
                    )}
                  </div>
                </button>
                {/* </Link> */}
              </div>

              <div className="decription-sixmobile-div">
                <div>
                  <div className="head-sixmobile">
                    <h6>{product.product_name}</h6>
                  </div>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                    className="star-icon-moblie"
                    alt="Star Rating"
                  />
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                    className="star-icon-moblie"
                    alt="Star Rating"
                  />
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                    className="star-icon-moblie"
                    alt="Star Rating"
                  />
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                    className="star-icon-moblie"
                    alt="Star Rating"
                  />
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                    className="star-icon-moblie"
                    alt="Star Rating"
                  />
                  &nbsp;&nbsp;&nbsp;<span>{product.rating} Reviews</span><br />
                  <span>${product.price}</span><br />
                  
                  <button
                    type="button"
                    className="btn btn-dark btm-six-mobiles"
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
    </div>
            </div>
    </div>
    </div>

  );
}

export default FindId;
