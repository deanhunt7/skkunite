import React from 'react';
import './About.css'; 
import Anni from './Anni.png';
import Dean from './Dean.png';
import Melody from './Melody.png';
import Noemie from './Noemie.png';
import Shaki from './Shaki.png';

export const About = () => {
  const teamMembers = [
    {
      name: 'Dean',
      role: 'Team leader & Backend developer',
      image: Dean, 
    },
    {
        name: 'Shaki',
        role: 'Frontend developer',
        image: Shaki, 
    },
    {
        name: 'Anni',
        role: 'Frontend developer',
        image: Anni, 
    },
    {
        name: 'Noémie',
        role: 'Frontend developer',
        image: Noemie, 
    },
    {
        name: 'Melody',
        role: 'Frontend developer',
        image: Melody, 
    },
  ];

  return (
    <div className="about-container">
      <h1 className="about-heading">About SKKUnite</h1>
      <p className="about-text">
        SKKUnite is a web application that fosters connections between international students and Korean students, creating a vibrant global community.
      </p>
      <p className="about-text">
        Our dedicated team of 5 members is passionate about enhancing the global education experience and promoting cultural exchange.
      </p>

      <div className="team-section">
        <h2 className="team-heading">Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-member-image" />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
