import React, { useState } from 'react';
import './ArtworkEditModal.scss';

const ArtworkEditModal = ({ artwork, onClose, onSave }) => {
  const [title, setTitle] = useState(artwork.title);
  const [description, setDescription] = useState(artwork.description);
  const [category, setCategory] = useState(artwork.category);
  const [image, setImage] = useState(artwork.image);

  const handleSave = () => {
    const updatedArtwork = {
      ...artwork,
      title,
      description,
      category,
      image,
    };
    onSave(updatedArtwork);
    onClose();
  };

  return (
    <div className="artwork-edit-modal">
      <div className="modal-content">
        <h2>Edit Artwork</h2>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="digital">Digital Art</option>
            <option value="traditional">Traditional Art</option>
            <option value="3d">3D Modeling</option>
          </select>
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkEditModal;
