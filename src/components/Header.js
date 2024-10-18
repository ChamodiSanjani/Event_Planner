// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
              <li>
                {/* When this link is clicked, open the modal */}
                <Link to="#" onClick={handleOpenModal} className="data-collection-link">
                  <i className="fas fa-database"></i> Event Collection
                </Link>
              </li>
              <li><Link to="/previous-events"><i className="fas fa-database"></i> Previous Events</Link></li>
              <li><Link to="/upcoming-events"><i className="fas fa-utensils"></i> Upcoming Events</Link></li>
              <li><Link to="/about-us"><i className="fas fa-info-circle"></i> About Us</Link></li>
              <li><Link to="/contact-details"><i className="fas fa-envelope"></i> Contact Details</Link></li> {/* Update the link */}
            </ul>
          </nav>
        </div>
      </header>

      {/* Display the LoginModal only if isModalOpen is true */}
      {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </>
  );
};

export default Header;
