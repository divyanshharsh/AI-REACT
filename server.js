// server.js

require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const openai = require('openai');

// Configure the OpenAI API client
const apiKey = process.env.OPENAI_API_KEY;
const openaiClient = new openai({ key: apiKey });

// Middleware to parse JSON requests
app.use(express.json());

// Define a route to generate stories based on prompts
app.post('/generate-story', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Make a request to GPT-3 to generate a story
    const response = await openaiClient.completions.create({
      engine: 'text-davinci-002', // Choose an appropriate GPT-3 engine
      prompt,
      max_tokens: 150, // Adjust the max length of the generated story
    });

    const story = response.choices[0].text;

    res.json({ story });
  } catch (error) {
    console.error('Error generating story:', error);
    res.status(500).json({ error: 'Error generating story' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
