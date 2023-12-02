import React, { useState } from 'react';
import './Profile.css';
import profilePic from './profpic.png'; 

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    name: 'Jane Doe',
    major: 'Computer Science',
    sports: 'Martial Arts',
    from: 'Dutch',
    bio: '',
    profilePic: profilePic 
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save profileInfo data to a database or perform any necessary actions
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({
      ...profileInfo,
      [name]: value
    });
  };

  let fileInputRef = null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileInfo({
        ...profileInfo,
        profilePic: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleProfileClick = () => {
    if (fileInputRef) {
      fileInputRef.click();
    }
  };

  if (isEditing) {
    return (
      <div className="profile">
        <h1>Edit Profile</h1>
        <div className="profile-section">
          <div className="profile-pic" onClick={handleProfileClick}>
            <img src={profileInfo.profilePic} alt="Profile" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={(input) => (fileInputRef = input)}
              style={{ display: 'none' }}
            />
          </div>
          <form className="edit-form">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={profileInfo.name}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>Major:</label>
              <input
                type="text"
                name="major"
                value={profileInfo.major}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label>Nationality:</label>
              <input
                type="text"
                name="from"
                value={profileInfo.from}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Sports:</label>
              <textarea
                name="Martial Arts"
                value={profileInfo.sports}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Bio:</label>
              <textarea
                name="bio"
                value={profileInfo.bio}
                onChange={handleInputChange}
              />
            </div>
            <button className="save-btn" onClick={handleSaveClick}>
              Save & Go Back
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-section">
        <div className="profile-pic">
          <img src={profileInfo.profilePic} alt="Profile" />
        </div>
        <div className="info">
          <h2>Name: {profileInfo.name}</h2>
          <p>Major: {profileInfo.major}</p>
          <p>Nationality: {profileInfo.from}</p>
          <p>Sports: {profileInfo.sports}</p>
          <p class="bio-paragraph">Bio: {profileInfo.bio}</p>
        </div>
      </div>
      <button className="edit-btn" onClick={handleEditClick}>
        Edit
      </button>
    </div>
  );
};

export default Profile;