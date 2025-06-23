const Entry = require("../models/Entry");

exports.createEntry = async (req, res) => {
  try {
    const { title, content, mood, category } = req.body;
    const newEntry = new Entry({ ...req.body, userId: req.userId });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: "Failed to create entry" });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const { date } = req.query;
    const query = { userId: req.userId };
    if (date) {
      const selectedDate = new Date(date);
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      query.date = { $gte: selectedDate, $lt: nextDay };
    }
    const entries = await Entry.find(query).sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch entries" });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const entry = await Entry.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!entry) return res.status(404).json({ error: "Entry not found" });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: "Failed to update entry" });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!entry) return res.status(404).json({ error: "Entry not found" });
    res.json({ message: "Entry deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete entry" });
  }
};
