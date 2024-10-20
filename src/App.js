// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import DataCollection from './components/DataCollection';
import LoginModal from './components/LoginModal'; // Import LoginModal
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import ContactDetails from './components/ContactDetails'; // Import ContactDetails component
import Reviews from './components/Reviews'; // Import Reviews component
import './css/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-collection" element={<LoginModal />} /> {/* Render LoginModal */}
          <Route path="/create-new-event" element={<DataCollection />} />
          <Route path="/about-us" element={<AboutUs />} /> {/* Add this route */}
          <Route path="/contact-details" element={<ContactDetails />} /> {/* Add route for ContactDetails */}
          <Route path="/reviews" element={<Reviews />} /> {/* Use element instead of component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
