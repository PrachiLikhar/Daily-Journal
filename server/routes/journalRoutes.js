const express = require('express');
const router = express.Router();
const {
  createEntry,
  getEntries,
  updateEntry,
  deleteEntry,
} = require('../controllers/entryController');

const auth = require('../middleware/authMiddleware');

router.get('/', auth, getEntries);
router.post('/', auth, createEntry);
router.put('/:id', auth, updateEntry);
router.delete('/:id', auth, deleteEntry);

module.exports = router;
