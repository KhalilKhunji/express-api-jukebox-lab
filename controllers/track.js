const Track = require('../models/track.js');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const newTrack = await Track.create(req.body);
      res.status(201).json(newTrack);
    } catch (error) {
      res.status(500).json({ error: 'oops something went wrong' });
    };
});

router.get('/', async (req, res) => {
    try {
      const allTracks = await Track.find();
      res.status(200).json(allTracks);
    } catch (error) {
      res.status(500).json({ error: 'oops something went wrong' });
    };
});

module.exports = router;