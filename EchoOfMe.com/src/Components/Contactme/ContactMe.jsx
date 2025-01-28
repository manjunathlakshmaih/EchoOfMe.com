import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './ContactMe.css';  

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleInputChange} 
          placeholder="Your Name" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleInputChange} 
          placeholder="Your Email" 
          required 
        />
        <textarea 
          name="message" 
          value={formData.message}
          onChange={handleInputChange} 
          placeholder="Your Message" 
          required
        />
        <button type="submit">Send Message</button>
      </form>

      <div className="social-icons">
        <a href="https://github.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
