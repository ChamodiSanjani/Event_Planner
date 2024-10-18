// src/components/DataCollection.js
import React from 'react';

const DataCollection = () => (
  <div className="form-container" style={{ 
    width: '90%', 
    maxWidth: '800px', 
    margin: '50px auto', 
    padding: '20px', 
    backgroundColor: '#fff', 
    borderRadius: '8px', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
  }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Event Data Collection</h2>
    <form action="/submit_event" method="post">
      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label htmlFor="event-name" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Event Name</label>
        <input 
          type="text" 
          id="event-name" 
          name="event_name" 
          placeholder="Enter Event Name" 
          required 
          style={{ 
            width: '100%', 
            padding: '10px', 
            border: '1px solid #ccc', 
            borderRadius: '4px' 
          }} 
        />
      </div>

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label htmlFor="event-type" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Event Type</label>
        <select 
          id="event-type" 
          name="event_type" 
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

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label htmlFor="event-date" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Date</label>
        <input type="date" id="event-date" name="event_date" required 
          style={{ 
            width: '100%', 
            padding: '10px', 
            border: '1px solid #ccc', 
            borderRadius: '4px' 
          }} 
        />
      </div>

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label htmlFor="starting-time" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Starting Time</label>
        <input type="time" id="starting-time" name="starting_time" required 
          style={{ 
            width: '100%', 
            padding: '10px', 
            border: '1px solid #ccc', 
            borderRadius: '4px' 
          }} 
        />
      </div>

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label htmlFor="ending-time" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Ending Time</label>
        <input type="time" id="ending-time" name="ending_time" required 
          style={{ 
            width: '100%', 
            padding: '10px', 
            border: '1px solid #ccc', 
            borderRadius: '4px' 
          }} 
        />
      </div>

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label htmlFor="event-location" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Location</label>
        <input 
          type="text" 
          id="event-location" 
          name="event_location" 
          placeholder="Enter Event Location" 
          required 
          style={{ 
            width: '100%', 
            padding: '10px', 
            border: '1px solid #ccc', 
            borderRadius: '4px' 
          }} 
        />
      </div>

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label htmlFor="event-description" style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Description</label>
        <textarea 
          id="event-description" 
          name="event_description" 
          placeholder="Enter Event Description" 
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
        <button type="submit" style={{ padding: '10px 15px', borderRadius: '4px', backgroundColor: '#5cb85c', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit Event</button>
      </div>
    </form>
  </div>
);

export default DataCollection;
