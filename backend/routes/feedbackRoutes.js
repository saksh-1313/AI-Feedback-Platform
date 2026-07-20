const express = require("express");
const router = express.Router();

const {
  addFeedback,
  getFeedbacks,
  getFeedbackStats,
} = require("../controllers/feedbackController");
const auth = require("../middleware/auth");

router.post("/add", auth, addFeedback);
router.get("/", auth, getFeedbacks);
router.get("/stats", auth, getFeedbackStats);

module.exports = router;