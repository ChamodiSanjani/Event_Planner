// src/components/Reviews.js
import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]); // State to hold all reviews
  const [newReview, setNewReview] = useState(''); // State for the new review input

  // Function to handle changes in the review textarea
  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  // Function to handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (newReview.trim() !== '') { // Check if the review is not empty
      setReviews([...reviews, newReview]); // Add the new review to the list
      setNewReview(''); // Clear the input field
    }
  };

  return (
    <div style={{
      width: '90%',
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Reviews</h2>

      <form onSubmit={handleReviewSubmit} style={{ marginBottom: '20px' }}>
        <textarea
          value={newReview}
          onChange={handleReviewChange}
          placeholder="Type your review here..."
          rows="4"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginBottom: '10px',
            resize: 'none',
          }}
        />
        <button type="submit" style={{
          padding: '10px 15px',
          backgroundColor: '#4285F4',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
          Submit Review
        </button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>User Reviews:</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p> // Message when there are no reviews
        ) : (
          reviews.map((review, index) => (
            <div key={index} style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '10px',
            }}>
              {review}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
