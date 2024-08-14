// src/index.js (or wherever your Express server is defined)

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors({ origin: 'http://localhost:3001' })); // Allow requests from frontend

let artworks = [
  { id: 1, title: 'Lucrare 1', description: 'Descriere pentru lucrarea 1', category: 'digital', image: 'link-imagine-1.jpg', date: new Date().toISOString(), likes: 10 },
  { id: 2, title: 'Lucrare 2', description: 'Descriere pentru lucrarea 2', category: 'traditional', image: 'link-imagine-2.jpg', date: new Date().toISOString(), likes: 20 },
  { id: 3, title: 'Lucrare 3', description: 'Descriere pentru lucrarea 3', category: '3d', image: 'link-imagine-3.jpg', date: new Date().toISOString(), likes: 15 },
];

// Get all artworks
app.get('/artworks', (req, res) => {
  res.json(artworks);
});

// Add a new artwork
app.post('/artworks', (req, res) => {
  const newArtwork = { id: Date.now(), ...req.body };
  artworks.push(newArtwork);
  res.json(newArtwork);
});

// Update an artwork
app.put('/artworks/:id', (req, res) => {
  const { id } = req.params;
  const index = artworks.findIndex((artwork) => artwork.id == id);
  if (index !== -1) {
    artworks[index] = { ...artworks[index], ...req.body };
    res.json(artworks[index]);
  } else {
    res.status(404).json({ message: 'Artwork not found' });
  }
});

// Delete an artwork
app.delete('/artworks/:id', (req, res) => {
  const { id } = req.params;
  artworks = artworks.filter((artwork) => artwork.id != id);
  res.json({ message: 'Artwork deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
