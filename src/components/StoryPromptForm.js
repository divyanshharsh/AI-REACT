import React, { useState } from 'react';
import './StoryPromptForm.css';
import axios from 'axios';

function StoryPromptForm() {
    const [prompt, setPrompt] = useState('');
    const [, setStory] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/generate-story', { prompt }); // Send the prompt in the request body
  
        if (response.status === 200) {
          setStory(response.data.story); // Update the state with the generated story
        } else {
          console.error('Failed to generate story');
          // Handle error, e.g., display an error message to the user
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle network or other errors
      }
    };
  

  return (
    <div className="story-prompt-form">
  <h1 className="form-title">Provide a Story Prompt</h1>
  <form onSubmit={handleSubmit}>
    <textarea
      className="textarea-input"
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Enter your story prompt here..."
    />
    <button type="submit" className="submit-button">
      Generate Story
    </button>
  </form>
</div>

  );
}

export default StoryPromptForm;
