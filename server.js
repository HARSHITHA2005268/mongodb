const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // adjust path if needed

dotenv.config(); // Load .env variables

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Your routes go here...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
