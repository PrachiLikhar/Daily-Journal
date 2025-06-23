const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const {
  createEntry,
  getEntries,
  updateEntry,
  deleteEntry,
} = require("../controllers/entryController");

router.post("/", verifyToken, createEntry);
router.get("/", verifyToken, getEntries);
router.put("/:id", verifyToken, updateEntry);
router.delete("/:id", verifyToken, deleteEntry);

module.exports = router;
