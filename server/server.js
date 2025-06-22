const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();
console.log("✅ MONGO_URI from .env:", process.env.MONGO_URI); // Debug check

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const journalRoutes = require('./routes/journalRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/entries', journalRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
  
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
