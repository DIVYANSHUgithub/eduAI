const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/edai_courses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Course model (should be in models/Course.js ideally)
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videos: [{ type: String }], // URLs or video titles
  notes: [{ type: String }],  // URLs or note titles
});
const Course = mongoose.model('Course', courseSchema);

const askRoute = require('./routes/ask');
app.use('/api/ask', askRoute);

const courseRoute = require('./routes/course');
app.use('/api/courses', courseRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
