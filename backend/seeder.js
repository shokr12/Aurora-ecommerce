require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const products = require('./data/products');

const seedMongo = async () => {
    try {
        await connectDB();
        console.log('Clearing old MongoDB products...');
        await Product.deleteMany({});
        
        console.log('Inserting 32 robust products into MongoDB Atlas...');
        const sanitizedProducts = products.map((p) => {
            const { id, ...rest } = p;
            return rest; 
        });
        
        await Product.insertMany(sanitizedProducts);
        console.log('Seeder Successfully Executed! Your MongoDB is heavily populated.');
        process.exit();
    } catch (error) {
        console.error('Seeder failed', error);
        process.exit(1);
    }
};

seedMongo();
