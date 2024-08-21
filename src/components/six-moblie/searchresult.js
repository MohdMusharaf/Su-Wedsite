
import { useLocation,Link ,useParams} from 'react-router-dom';
import AddCart from '../Add-Cart/addCart';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import SecondHeader from '../second-header/secondHead';
import ThirdHeader from '../Third-Header/thirdHeader';


function SearchResults() {
  const location = useLocation();
  const results = location.state?.results || [];
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { id } = useParams(); 
  const [cardProduct, setCardProduct] = useState(null);
  const [previousProducts, setPreviousProducts] = useState([]);

  const fetchViewedCardProduct = async (id) => {  
    try {
      const response = await axios.get(`http://localhost:7000/api/view/${id}`);
      
      const fetchedProduct = response.data.selectedProduct;
      
      
      setPreviousProducts((prev) => [...prev, fetchedProduct].filter(Boolean));
      setCardProduct(fetchedProduct);
    } catch (error) {
      console.error('Error fetching card product:', error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/products');
        
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  const handleAddCartClick = (id) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      fetchViewedCardProduct(id)
    }, 200); 
  };

  // Event handlers for individual product
  const handleMouseMove = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  useEffect(() => {
    if (id) {
      fetchViewedCardProduct(id);
    }
  }, [id]);
  

  return (
    <div>
        <div style={{backgroundColor:"#232f3f"}}>
        <SecondHeader />
        <ThirdHeader />
        </div>
      <h2>Search Results</h2>
      
      {results.length > 0 ? (
        <div className="six-mobile-div">
          {results.map((product) => (
            <div
            className="each-mobile-div"
            style={{ marginLeft: "40px" }}
            onMouseLeave={handleMouseLeave}
          >
            <div>
            <Link to={`/products/${product._id}`} className="link-tag" key={product._id}>
              <button
                onMouseMove={() => handleMouseMove(product._id)}
                className="btn-mobile"
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
              </Link>
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
                &nbsp;&nbsp;&nbsp;<span>2 Reviews</span><br />
                <span>${product.price}</span><br />
                <button
                  type="button"
                  className="btn btn-dark btm-six-mobiles"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={()=>handleAddCartClick(product._id)}
                >
                  Add Cart
                </button>
                {loading ? <div className="loader"></div> : ""}
               <AddCart  />
              </div>
            </div>
          </div>
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
      
    </div>
  );
}

export default SearchResults;
