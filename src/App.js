import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import StoryPromptForm from './components/StoryPromptForm';
import StoryDisplay from './components/StoryDisplay';
import Leaderboard from './components/Leaderboard';
import Header from './components/Header';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<StoryPromptForm />} />
        <Route path="/story" element={<StoryDisplay />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>

    </Router>
  );
}

export default App;
