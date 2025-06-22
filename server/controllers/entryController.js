const Entry = require("../models/Entry");

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
    res.status(500).json({ message: "Failed to create entry", error: err.message });
  }
};
exports.getEntries = async (req, res) => {
  try {
    const entries = await Entry.find({ user: req.userId }).sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch entries", error: err.message });
  }
};

