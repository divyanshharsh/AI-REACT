import React, { useState, useEffect } from 'react';
import './Leaderboard.css';

function Leaderboard() {
  const [topStories, setTopStories] = useState([]);

  // Fetch the top-voted stories from your backend and set them to 'topStories'.

  return (
    <div>
      <h1>Leaderboard</h1>
      <div className="leaderboard">
        {topStories.map((story, index) => (
          <div key={index} className="leaderboard-item">
            <p>{story.prompt}</p>
            <p>{story.story}</p>
            <p>Votes: {story.votes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
