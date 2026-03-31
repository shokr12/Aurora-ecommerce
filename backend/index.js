require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

// Connect to MongoDB Database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Main Routes Mounted
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
