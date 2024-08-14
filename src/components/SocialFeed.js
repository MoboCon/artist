// src/components/SocialFeed.js
import React from 'react';
import './SocialFeed.scss';

const SocialFeed = () => (
  <div className="social-feed">
    <h2>Urmărește-mă pe Instagram</h2>
    <iframe 
      src="https://www.instagram.com/p/CODE/embed" 
      width="400" 
      height="480" 
      frameBorder="0" 
      scrolling="no" 
      allowtransparency="true">
    </iframe>
  </div>
);

export default SocialFeed;
