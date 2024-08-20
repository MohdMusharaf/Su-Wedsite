const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const Product= require("./modules/product")

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://mushumujju098765:Mushu7541@mushu47.myhxxs2.mongodb.net/?retryWrites=true&w=majority&appName=mushu47';

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



// const addProducts = async () => {
 
//   try{
//     const product_detail =
//   [
//     {
//   "product_name": "Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB",
//   "price": 56.00,
//   "specifications": {
//     "sound": "Bass and Stereo Sound",
//     "display_resolution": "3088 x 1440 pixels",
//     "memory": "12GB RAM",
//     "storage": "256GB"
//   },
//   "availability": "In Stock",
//   "sku": "N/A-01",
//   "vendor": "Apple",
//   "categories": ["Best Selling", "Featured Products"],
//   "tags": ["Laptop & Ipad", "Smart Phones", "Tablets"],
//   "image_url_1": "https://demo-morata.myshopify.com/cdn/shop/products/products_1_1.jpg?v=1697644606",
//   "image_url_2": "https://demo-morata.myshopify.com/cdn/shop/products/products_1_2.jpg?v=1697644606"
// },
// {
//   "product_name": "Apple iPad Mini 6 Wi-Fi Cellular 64GB/128GB",
//   "price": 56.00,
//   "specifications": {
//     "sound": "Bass and Stereo Sound",
//     "display_resolution": "3088 x 1440 pixels",
//     "memory": "12GB RAM",
//     "storage": "256GB"
//   },
//   "availability": "In Stock",
//   "sku": "N/A-01",
//   "vendor": "Apple",
//   "categories": ["Best Selling", "Featured Products"],
//   "tags": ["Laptop & Ipad", "Smart Phones", "Tablets"],
//   "image_url_1": "https://demo-morata.myshopify.com/cdn/shop/products/products_4_1.jpg?v=1697644644",
//   "image_url_2": "https://demo-morata.myshopify.com/cdn/shop/products/products_4_3.jpg?v=1697644644"
// },
// {
//   "product_name": "Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB",
//   "price": 56.00,
//   "specifications": {
//     "sound": "Bass and Stereo Sound",
//     "display_resolution": "3088 x 1440 pixels",
//     "memory": "12GB RAM",
//     "storage": "256GB"
//   },
//   "availability": "In Stock",
//   "sku": "N/A-01",
//   "vendor": "Apple",
//   "categories": ["Best Selling", "Featured Products"],
//   "tags": ["Laptop & Ipad", "Smart Phones", "Tablets"],
//   "image_url_1": "https://demo-morata.myshopify.com/cdn/shop/products/products_2_1.jpg?v=1697644616",
//   "image_url_2": "https://demo-morata.myshopify.com/cdn/shop/products/products_2_2.jpg?v=1697644616"
// },
// {
//   "product_name": "Samsung Galaxy S22 Plus 5G 8GB/128GB",
//   "price": 120.00,
//   "specifications": {
//     "screen_size": "10.9 inch",
//     "operating_system": "iOS 14.0",
//     "product_length": "9.74 inch"
//   },
//   "availability": "In Stock",
//   "sku": "N/A-1",
//   "vendor": "Samsung",
//   "categories": ["Best Selling", "Featured Products"],
//   "tags": ["Samsung", "Smart Phones", "Tablets"],
//   "image_url_1": "https://demo-morata.myshopify.com/cdn/shop/products/products_8_2.jpg?v=1697644686",
//   "image_url_2": "https://demo-morata.myshopify.com/cdn/shop/products/products_8_1.jpg?v=1697644686"
// },
// {
//   "product_name": "Samsung Galaxy S21 Ultra 128GB - Black",
//   "price": 120.00,
//   "specifications": {
//     "screen_size": "10.9 inch",
//     "operating_system": "iOS 14.0",
//     "product_length": "9.74 inch"
//   },
//   "availability": "In Stock",
//   "sku": "N/A-1",
//   "vendor": "Samsung",
//   "categories": ["Best Selling", "Featured Products"],
//   "tags": ["Samsung", "Smart Phones", "Tablets"],
//   "image_url_1": "https://demo-morata.myshopify.com/cdn/shop/products/products_6_1.jpg?v=1697644666",
//   "image_url_2": "https://demo-morata.myshopify.com/cdn/shop/products/products_6_2.jpg?v=1697644666",
// },
// {
//   "product_name": "Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB",
//   "price": 56.00,
//   "specifications": {
//     "sound": "Bass and Stereo Sound",
//     "display_resolution": "3088 x 1440 pixels",
//     "memory": "12GB RAM",
//     "storage": "256GB"
//   },
//   "availability": "In Stock",
//   "sku": "N/A-01",
//   "vendor": "Apple",
//   "categories": ["Best Selling", "Featured Products"],
//   "tags": ["Laptop & Ipad", "Smart Phones", "Tablets"],
//   "image_url_1": "https://demo-morata.myshopify.com/cdn/shop/products/products_2_1.jpg?v=1697644616",
//   "image_url_2": "https://demo-morata.myshopify.com/products/proenza-schouler-white-label-25"
// }


//   ];
//   await Product.insertMany(product_detail);
//     console.log('Products added successfully');
//   } catch (error) {
//     console.error('Error adding products:', error);
//   }
// };

// addProducts();

app.use('/auth', require('./routes/authRoutes'))
app.use('/api', require('./routes/apiRoutes'))

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});