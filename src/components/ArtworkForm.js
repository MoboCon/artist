import React, { useState, useContext } from 'react';
import { ArtworkContext } from '../context/ArtworkContext';

const ArtworkForm = ({ existingArtwork, onClose }) => {
  const { addArtwork, updateArtwork } = useContext(ArtworkContext);
  const [title, setTitle] = useState(existingArtwork ? existingArtwork.title : '');
  const [description, setDescription] = useState(existingArtwork ? existingArtwork.description : '');
  const [image, setImage] = useState(existingArtwork ? existingArtwork.image : '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '' || image.trim() === '') {
      setError('Toate câmpurile sunt obligatorii!');
      return;
    }

    const artworkData = { title, description, image };

    if (existingArtwork) {
      updateArtwork(existingArtwork.id, artworkData);
    } else {
      addArtwork(artworkData);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <div>
        <label>Titlu:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Descriere:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Imagine URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Salvează</button>
    </form>
  );
};

export default ArtworkForm;
