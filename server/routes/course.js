const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import Course model from index.js (temporary, ideally from models/Course.js)
const Course = mongoose.model('Course');

// GET all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// GET a single course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

// POST a new course
router.post('/', async (req, res) => {
  try {
    const { title, description, videos, notes } = req.body;
    const newCourse = new Course({ title, description, videos, notes });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create course' });
  }
});

module.exports = router; 