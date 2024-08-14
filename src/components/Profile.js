import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = ({ artworks = [] }) => {
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
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
  }, [category, sortOrder, artworks]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio-title">Lucrările Mele</h1>
      <div className="filter-container">
        <label htmlFor="category">Filtrează după categorie:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="all">Toate</option>
          <option value="digital">Artă Digitală</option>
          <option value="traditional">Artă Tradițională</option>
          <option value="3d">Modelare 3D</option>
        </select>

        <label htmlFor="sortOrder">Sortează după:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="newest">Cele mai noi</option>
          <option value="popular">Cele mai populare</option>
        </select>
      </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
