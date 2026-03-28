const express = require("express");
const router = express.Router();
const { askAI, savePrompt, getHistory } = require("../controllers/aiController");

router.post("/ask-ai", askAI);
router.post("/save", savePrompt);
router.get("/history", getHistory);

module.exports = router;