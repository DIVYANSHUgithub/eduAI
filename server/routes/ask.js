const express = require('express');
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req, res) => {
  const { question } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or gpt-4 if you have access
      messages: [{ role: "user", content: question }]
    });

    const answer = response.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to get response from AI" });
  }
});

module.exports = router;
