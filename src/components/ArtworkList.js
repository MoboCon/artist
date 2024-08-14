import React from 'react';

const ArtworkList = ({ artworks, updateArtwork, deleteArtwork }) => {
  return (
    <div className="artwork-list">
      {artworks.map((artwork) => (
        <div key={artwork._id} className="artwork-item">
          <h2>{artwork.title}</h2>
          <p>{artwork.description}</p>
          {artwork.imageUrl && <img src={artwork.imageUrl} alt={artwork.title} />}
          <a href={artwork.clientLink} target="_blank" rel="noopener noreferrer">
            Vizitează site-ul clientului
          </a>
          <button onClick={() => updateArtwork(artwork)}>Editează</button>
          <button onClick={() => deleteArtwork(artwork._id)}>Șterge</button>
        </div>
      ))}
    </div>
  );
};

export default ArtworkList;
