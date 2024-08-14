const mongoose = require('mongoose');

const ArtworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  clientLink: { type: String },
  status: { type: Boolean, default: true }
});

module.exports = mongoose.model('Artwork', ArtworkSchema);
