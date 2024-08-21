// import React, { useState, useEffect } from "react";
// import './sixmobile.css';
// import AddCart from "../Add-Cart/addCart";
// import axios from 'axios';
// import { Link } from "react-router-dom";

// function SixOther() {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [selectedProductId, setSelectedProductId] = useState(null);
//   const [cardProduct, setCardProduct] = useState(null);
//   const [previousProducts, setPreviousProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:7000/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         setError('Error fetching products');
//       }
//     };

//     fetchProducts();
//   }, []);

//   const fetchCardProduct = async (productId) => {
//     try {
//       const response = await axios.get(`http://localhost:7000/api/view/${productId}`);
//       setPreviousProducts((prev) => [...prev, cardProduct].filter(Boolean));
//       setCardProduct(response.data.targetProduct); 
//       console.log(cardProduct);
      
//     } catch (error) {
//       console.error('Error fetching card product:', error);
//     }
//   };

//   const handleAddCartClick = (productId) => {
//     setLoading(true);
//     setSelectedProductId(productId);

//     fetchCardProduct(productId);
//     setTimeout(() => {
//       setLoading(false);
//     }, 200); 
//   };

//   const handleMouseMove = (productId) => {
//     setHoveredProduct(productId);
//   };

//   const handleMouseLeave = () => {
//     setHoveredProduct(null);
//   };

//   const displayedProducts = products.slice(8, 14);

//   return (
//     <div>
//       <div className="top-deals-div">
//         <span className="top-deals">On Sales</span>
//       </div>

//       <div className="six-mobile-div">
//         {displayedProducts.map((product) => (
//           <div
//             key={product._id}
//             className="each-mobile-div"
//             style={{ marginLeft: "40px" }}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div>
//               <Link to={`/products/${product._id}`} className="link-tag">
//                 <button
//                   onMouseMove={() => handleMouseMove(product._id)}
//                   className="btn-mobile"
//                 >
//                   <div className="btb-image-change">
//                     {hoveredProduct === product._id ? (
//                       <div className="image-icon-div">
//                         <div>
//                           <img
//                             src={product.image_url_2}
//                             alt="Second Image"
//                             className="six-mobile-image"
//                           />
//                         </div>
//                         <div className="icon-mobile-div">
//                           <img
//                             src="https://tse3.mm.bing.net/th?id=OIP.mnwz82yom-isoIarPAWoSwHaHa&pid=Api&P=0&h=180"
//                             className="heart-icons-mobile"
//                             alt="Heart Icon"
//                           />
//                           <img
//                             src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
//                             className="heart-icons-mobile"
//                             alt="Eye Icon"
//                           />
//                           <img
//                             src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"
//                             className="heart-icons-mobile"
//                             alt="Eye Icon"
//                           />
//                         </div>
//                       </div>
//                     ) : (
//                       <div>
//                         <img
//                           src={product.image_url_1}
//                           alt="First Image"
//                           className="six-mobile-image"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </button>
//               </Link>
//             </div>

//             <div className="decription-sixmobile-div">
//               <div>
//                 <div className="head-sixmobile">
//                   <h6>{product.product_name}</h6>
//                 </div>
//                 <img
//                   src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
//                   className="star-icon-moblie"
//                   alt="Star Rating"
//                 />
//                 {/* Repeat star icons */}
//                 <span>2 Reviews</span><br />
//                 <span>${product.price}</span><br />
//                 <button
//                   type="button"
//                   className="btn btn-dark btm-six-mobiles"
//                   data-toggle="modal"
//                   data-target="#exampleModal"
//                   onClick={() => handleAddCartClick(product._id)}
//                 >
//                   Add Cart
//                 </button>
//                 {loading ? <div className="loader"></div> : ""}
//                 {selectedProductId && cardProduct && (
//                   <AddCart productId={selectedProductId} cardProduct={cardProduct} previousProducts={previousProducts} />
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SixOther;
