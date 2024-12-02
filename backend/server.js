const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bodyParser = require('body-parser');
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require('./routes/categoryRoutes');
const cartRoutes = require('./routes/cartRoutes');
const originalPakistanWearRoutes = require('./routes/originalPakistanWearRoutes');
const fileUploadRoutes = require('./routes/fileUploadRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();
const app = express();
connectDB();

// Enable CORS for your frontend URL
const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET, POST, DELETE, PATCH, PUT",
  Credential: true,
};

app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // For URL-encoded data


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/product-category', originalPakistanWearRoutes);
app.use('/api/files', fileUploadRoutes);

// Admin Routes
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
