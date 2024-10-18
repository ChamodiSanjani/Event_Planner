// src/components/LoginModal.js
import React from 'react';

const LoginModal = () => {
  return (
    <div className="modal" style={modalStyles}>
      <div className="modal-content" style={modalContentStyles}>
        <span style={closeButtonStyles} onClick={() => console.log('Close modal')}>×</span>
        <h2>Login</h2>
        <form action="/submit_login" method="post">
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required style={inputStyles} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required style={inputStyles} />
          </div>
          <button type="submit" style={buttonStyles}>Login</button>
        </form>
      </div>
    </div>
  );
};

// Example styles for the modal (adjust as needed)
const modalStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  zIndex: 1000,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const modalContentStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '300px',
};

const closeButtonStyles = {
  float: 'right',
  cursor: 'pointer',
  fontSize: '20px',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyles = {
  padding: '10px 15px',
  borderRadius: '4px',
  backgroundColor: '#5cb85c',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default LoginModal;
