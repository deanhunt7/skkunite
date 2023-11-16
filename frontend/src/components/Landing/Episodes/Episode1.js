import React from 'react';
import './Episode.css'; 
import podcast1 from './podcast1.mp3'; 

const Episode1 = () => {
  return (
    <div className="episode-container">
      <h1>Welcome to SKKUnite! Episode 1</h1>
      <p>Today we discuss how you can make new friends on our platform.</p>

      <div className="audio-player">
        <audio controls>
          <source src={podcast1} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
};

export default Episode1;
