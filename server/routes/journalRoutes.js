const express = require('express');
const router = express.Router();
const {
  createEntry,
  getEntries,
  updateEntry,
  deleteEntry,
} = require('../controllers/entryController');

const auth = require('../middleware/authMiddleware'); // JWT check

// GET /api/entries → All entries for user
router.get('/', auth, getEntries);

// POST /api/entries → Create new entry
router.post('/', auth, createEntry);

// PUT /api/entries/:id → Edit specific entry
router.put('/:id', auth, updateEntry);

// DELETE /api/entries/:id → Delete entry
router.delete('/:id', auth, deleteEntry);

module.exports = router;
