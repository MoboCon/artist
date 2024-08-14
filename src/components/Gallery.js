import React from 'react';

const Gallery = ({ artworks }) => {
  return (
    <div className="gallery">
      {artworks.map((artwork) => (
        <div className="gallery-item" key={artwork._id}>
          <img src={artwork.image} alt={artwork.title} />
          <h3>{artwork.title}</h3>
          <p>{artwork.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
