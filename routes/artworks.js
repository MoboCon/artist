const express = require('express');
const multer = require('multer');
const Artwork = require('../models/Artwork');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  const artworks = await Artwork.find();
  res.json(artworks);
});

router.post('/', upload.single('image'), async (req, res) => {
  const { title, description, clientLink, status } = req.body;
  const artwork = new Artwork({
    title,
    description,
    image: req.file.path,
    clientLink,
    status
  });
  await artwork.save();
  res.json(artwork);
});

module.exports = router;
