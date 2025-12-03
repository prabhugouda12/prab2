const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/alumni-portal';

async function connectWithRetry(retries = 5, delay = 3000) {
  while (retries > 0) {
    try {
      await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('MongoDB connected');
      return;
    } catch (err) {
      console.error('MongoDB connection failed, retries left:', retries - 1);
      retries--;
      await new Promise(r => setTimeout(r, delay));
    }
  }
  throw new Error('Failed to connect to MongoDB');
}

module.exports = { connectWithRetry };
