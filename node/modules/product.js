const mongoose = require('mongoose');
const {Schema} = mongoose;
const productSchema = new mongoose.Schema({
    product_name: String,
    price: Number,
    specifications: {
      screen_size: String,
      operating_system: String,
      product_length: String,
      sound: String,
      display_resolution: String,
      memory: String,
      storage: String
    },
    availability: String,
    sku: String,
    vendor: String,
    categories: [String],
    tags: [String],
    image_url_1: String,
    image_url_2: String,
});

const Product = mongoose.model('Product', productSchema);
module.exports=Product