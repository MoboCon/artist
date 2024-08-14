import React, { useContext, useEffect, useState } from 'react';
import './Portfolio.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { ArtworkContext } from '../context/ArtworkContext';

const Portfolio = () => {
  const { artworks, setArtworks } = useContext(ArtworkContext); // Assuming you have a context that manages artworks
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    AOS.init({ duration: 1200 });
    fetchArtworks();
  }, []);

  useEffect(() => {
    filterAndSortArtworks();
  }, [artworks, category, sortOrder]);

  const fetchArtworks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/artworks');
      setArtworks(response.data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  const addArtwork = async (newArtwork) => {
    try {
      const response = await axios.post('http://localhost:5000/artworks', newArtwork);
      setArtworks([...artworks, response.data]);
    } catch (error) {
      console.error('Error adding artwork:', error);
    }
  };

  const updateArtwork = async (id, updatedArtwork) => {
    try {
      const response = await axios.put(`http://localhost:5000/artworks/${id}`, updatedArtwork);
      setArtworks(artworks.map(artwork => (artwork.id === id ? response.data : artwork)));
    } catch (error) {
      console.error('Error updating artwork:', error);
    }
  };

  const deleteArtwork = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/artworks/${id}`);
      setArtworks(artworks.filter(artwork => artwork.id !== id));
    } catch (error) {
      console.error('Error deleting artwork:', error);
    }
  };

  const filterAndSortArtworks = () => {
    let updatedArtworks = [...artworks];
    if (category !== 'all') {
      updatedArtworks = updatedArtworks.filter(artwork => artwork.category === category);
    }
    if (sortOrder === 'newest') {
      updatedArtworks.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === 'popular') {
      updatedArtworks.sort((a, b) => b.likes - a.likes);
    }
    setFilteredArtworks(updatedArtworks);
  };

  const handleAddArtwork = () => {
    const newArtwork = {
      title: 'New Artwork',
      description: 'Description of the new artwork',
      category: 'digital',
      image: 'link-to-new-artwork-image.jpg',
      date: new Date().toISOString(),
      likes: 0,
    };
    addArtwork(newArtwork);
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio-title" data-aos="fade-down">Lucrările Mele</h1>
      <div className="filter-container" data-aos="fade-down">
        <label htmlFor="category">Filtrează după categorie:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Toate</option>
          <option value="digital">Artă Digitală</option>
          <option value="traditional">Artă Tradițională</option>
          <option value="3d">Modelare 3D</option>
        </select>

        <label htmlFor="sortOrder">Sortează după:</label>
        <select id="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="newest">Cele mai noi</option>
          <option value="popular">Cele mai populare</option>
        </select>
      </div>

      <button onClick={handleAddArtwork}>Adaugă Lucrare</button>

      <div className="portfolio-gallery">
        {filteredArtworks.map((artwork) => (
          <div
            key={artwork.id}
            className="portfolio-item"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="portfolio-image-wrapper">
              <img src={artwork.image} alt={artwork.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <h2>{artwork.title}</h2>
                <p>{artwork.description}</p>
                <button className="view-details-button">Vezi Detalii</button>
              </div>
            </div>
            <div className="portfolio-actions">
              <button onClick={() => updateArtwork(artwork.id, { ...artwork, title: 'Updated Title' })}>Editează</button>
              <button onClick={() => deleteArtwork(artwork.id)}>Șterge</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
