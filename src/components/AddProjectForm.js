import React, { useState, useContext } from 'react';
import { ArtworkContext } from '../context/ArtworkContext';

const AddProjectForm = () => {
  const { addArtwork } = useContext(ArtworkContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('digital');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title,
      description,
      category,
      image,
      date: new Date().toISOString(),
      likes: 0,
    };
    addArtwork(newProject);
    // Clear form fields after submission
    setTitle('');
    setDescription('');
    setCategory('digital');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-project-form">
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label>Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="digital">Digital Art</option>
        <option value="traditional">Traditional Art</option>
        <option value="3d">3D Modeling</option>
      </select>

      <label>Image URL:</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProjectForm;
