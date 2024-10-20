// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <div style={imageContainerStyle}>
        <img 
          src="https://partyslate.imgix.net/companies-cover-image/31385/image-fc2b1742-9810-41be-8ce9-88767b7aceb3.jpeg?ixlib=js-2.3.2&w=500" 
          alt="Event Planning" 
          style={imageStyle}
        />
        <img 
          src="https://www.showtimeevent.com/images/blog/wedding-planner-in-ghaziabad.jpg" 
          alt="Celebration" 
          style={imageStyle}
        />
        <img 
          src="https://threebestrated.in/images/GavyanEvents-KalyanDombivali-MH.jpeg" 
          alt="Event Decor" 
          style={imageStyle}
        />
      </div>
      <p style={paragraphStyle}>
        Welcome to our Magical Event Planner. We are a passionate team dedicated to making your event planning experience as seamless and enjoyable as possible. 
        Our platform helps you easily create, manage, and track events of all types, whether they are corporate events, weddings, or casual gatherings.
      </p>
      <p style={paragraphStyle}>
        Our mission is to empower individuals and event planners with the right tools to bring their creative visions to life. We believe that every event is unique, 
        and our goal is to help you create magical moments that last a lifetime. With a user-friendly interface and advanced features, we ensure that you have everything 
        you need at your fingertips.
      </p>
      <p style={paragraphStyle}>
        Thank you for choosing our platform. We look forward to being a part of your event planning journey and helping you create unforgettable experiences!
      </p>
    </div>
  );
};

// Example styles for the About Us page
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

const paragraphStyle = {
  fontSize: '1.2em',
  lineHeight: '1.6',
  marginBottom: '20px',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const imageStyle = {
  width: '30%',
  height: 'auto',
  margin: '0 10px',
  borderRadius: '8px',
};

export default AboutUs;
