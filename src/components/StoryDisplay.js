import React, { useState } from 'react';
import './StoryDisplay.css';

function StoryDisplay() {
  const [story, setStory] = useState('');

  // Retrieve the generated story from your backend and set it to 'story'.

  return (
    <div>
      <h1>Generated Story</h1>
      <div className="story-content">
        {story ? (
          <p>{story}</p>
        ) : (
          <p>No story generated yet. Enter a prompt above.</p>
        )}
      </div>
    </div>
  );
}

export default StoryDisplay;
