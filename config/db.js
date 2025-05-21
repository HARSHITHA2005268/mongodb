const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ Initial MongoDB Connection Error:', error.message);
    process.exit(1); // Stop the server if first connection fails
  }

  // 🔁 These events handle future disconnects/reconnects
  mongoose.connection.on('disconnected', () => {
    console.warn('⚠️ MongoDB Disconnected');
  });

  mongoose.connection.on('reconnected', () => {
    console.log('🔄 MongoDB Reconnected');
  });

  mongoose.connection.on('error', (err) => {
    console.error('🔥 MongoDB Error:', err.message);
  });
};

module.exports = connectDB;
