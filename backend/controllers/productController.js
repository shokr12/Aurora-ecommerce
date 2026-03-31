const Product = require('../models/Product');
const fallbackProducts = require('../data/products');

const getProducts = async (req, res, next) => {
  try {
    let products = [];
    try {
      products = await Product.find({});
    } catch(err) {
      // Ignored
    }

    if (products.length === 0) {
      products = fallbackProducts;
    } else {
      products = products.map(p => ({
        id: p._id.toString(), 
        name: p.name, 
        price: Number(p.price), 
        category: p.category, 
        sizes: p.sizes || ["One Size"], 
        image: p.image, 
        description: p.description
      }));
    }
    
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    let product;
    try {
      if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        product = await Product.findById(req.params.id);
      }
    } catch(err) {
      // Ignored
    }

    if (!product) {
      product = fallbackProducts.find(p => p.id === parseInt(req.params.id) || p.id === req.params.id);
    }

    if (product) {
      res.json({
        id: product._id || product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        sizes: product.sizes,
        image: product.image,
        description: product.description
      });
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, getProductById };
