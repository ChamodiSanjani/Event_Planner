// src/components/ContactDetails.js
import React, { useState } from 'react';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      
      <div style={contactInfoStyle}>
        <div style={infoSectionStyle}>
          <h2>Contact Information</h2>
          <p>Phone: +94 77 123 4567</p>
          <p>Email: info@magicalevents.com</p>
          <p>Address: 123 Event Avenue, Colombo, Sri Lanka</p>
          <a
            href="https://www.google.com/maps/place/Colombo,+Sri+Lanka/"
            target="_blank"
            rel="noopener noreferrer"
            style={mapLinkStyle}
          >
            View on Google Maps
          </a>
        </div>
      </div>
      
      <div style={imageSectionStyle}>
        <h2>Our Team</h2>
        <img src="https://thumbs.dreamstime.com/b/people-faces-collage-set-multicultural-avatar-group-335695064.jpg" alt="Our Team" style={imageStyle} />
      </div>
    </div>
  );
};

// Example styles for the Contact Details page
const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '2em',
  marginBottom: '20px',
};

const contactInfoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const infoSectionStyle = {
  flex: '1',
  marginRight: '20px',
};

const formSectionStyle = {
  flex: '1',
  marginLeft: '20px',
};

const formGroupStyle = {
  marginBottom: '15px',
  textAlign: 'left',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  height: '100px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '4px',
  backgroundColor: '#5cb85c',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const mapLinkStyle = {
  color: '#007BFF',
  textDecoration: 'none',
};

const imageSectionStyle = {
  marginTop: '20px',
};

const imageStyle = {
  width: '100%',
  borderRadius: '8px',
  marginBottom: '10px',
};

export default ContactDetails;


