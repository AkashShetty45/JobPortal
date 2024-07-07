import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    skills: '',
    experience: '',
    education: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setProfile({
      ...profile,
      resume: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    // Submit profile data to backend
  };

  return (
    <div className="profile-page">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={profile.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" value={profile.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Resume</label>
          <input type="file" name="resume" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <label>Skills</label>
          <input type="text" name="skills" value={profile.skills} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Experience</label>
          <textarea name="experience" value={profile.experience} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Education</label>
          <textarea name="education" value={profile.education} onChange={handleChange} required />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
