// server/controllers/entryController.js

const Entry = require('../models/Entry');

exports.createEntry = async (req, res) => {
  try {
    const { mood, content } = req.body;

    const newEntry = await Entry.create({
      user: req.userId,
      mood,
      content,
      date: new Date(),
    });

    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create entry', error: err.message });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const entries = await Entry.find({ user: req.userId }).sort({ date: -1 });
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch entries', error: err.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { mood, content } = req.body;

    const updated = await Entry.findOneAndUpdate(
      { _id: id, user: req.userId },
      { mood, content },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;

    await Entry.findOneAndDelete({ _id: id, user: req.userId });
    res.status(200).json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
};
