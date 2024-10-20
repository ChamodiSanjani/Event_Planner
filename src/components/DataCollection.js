// src/components/DataCollection.js
import React, { useState } from 'react';
import { auth, googleProvider } from '../firebaseConfig';

const DataCollection = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    event_name: '',
    event_type: '',
    event_date: '',
    starting_time: '',
    ending_time: '',
    event_location: '',
    event_description: '',
  });

  const handleGoogleLogin = () => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log('User logged in:', result.user);
      })
      .catch((error) => {
        console.error('Error during Google login:', error);
      });
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setUser(null);
        console.log('User logged out');
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Event submitted successfully!');
    setFormData({
      event_name: '',
      event_type: '',
      event_date: '',
      starting_time: '',
      ending_time: '',
      event_location: '',
      event_description: '',
    });
  };

  return (
    <div className="form-container" style={{
      width: '90%',
      maxWidth: '800px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      {!user ? (
        // Display login button if user is not logged in
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button onClick={handleGoogleLogin} style={{
            padding: '10px 15px',
            backgroundColor: '#4285F4',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Log in with Google
          </button>
        </div>
      ) : (
        // Display the form and logout button after user is logged in
        <>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <p>Welcome, {user.displayName}!</p>
            <button onClick={handleLogout} style={{
              padding: '10px 15px',
              backgroundColor: '#db4437',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Log out
            </button>
          </div>

          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Event Data Collection</h2>
          <form onSubmit={handleSubmit}>
            {/* Event Name Field */}
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="event-name" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Event Name</label>
              <input
                type="text"
                id="event-name"
                name="event_name"
                placeholder="Enter Event Name"
                value={formData.event_name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            </div>

            {/* Event Type Field */}
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="event-type" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Event Type</label>
              <select
                id="event-type"
                name="event_type"
                value={formData.event_type}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}>
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Party">Party</option>
                <option value="Conference">Conference</option>
                <option value="Meeting">Meeting</option>
                <option value="Gathering">Gathering</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Event Date Field */}
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="event-date" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Date</label>
              <input
                type="date"
                id="event-date"
                name="event_date"
                value={formData.event_date}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            </div>

            {/* Starting Time Field */}
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="starting-time" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Starting Time</label>
              <input
                type="time"
                id="starting-time"
                name="starting_time"
                value={formData.starting_time}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            </div>

            {/* Ending Time Field */}
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="ending-time" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Ending Time</label>
              <input
                type="time"
                id="ending-time"
                name="ending_time"
                value={formData.ending_time}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            </div>

            {/* Event Location Field */}
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="event-location" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Location</label>
              <input
                type="text"
                id="event-location"
                name="event_location"
                placeholder="Enter Event Location"
                value={formData.event_location}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            </div>

            {/* Event Description Field */}
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="event-description" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Description</label>
              <textarea
                id="event-description"
                name="event_description"
                placeholder="Enter Event Description"
                value={formData.event_description}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  height: '100px',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" style={{
                padding: '10px 15px',
                borderRadius: '4px',
                backgroundColor: '#5cb85c',
                color: '#fff',
                border: 'none',
                cursor: 'pointer'
              }}>
                Submit Event
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default DataCollection;
