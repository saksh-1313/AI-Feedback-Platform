const Feedback = require("../models/Feedback");

exports.addFeedback = async (req, res) => {
  try {
    const { message } = req.body;

    let sentiment = "Neutral";

const positiveWords = [
  "good",
  "great",
  "excellent",
  "amazing",
  "useful",
  "helpful",
  "love",
  "nice",
  "best",
  "happy",
];

const negativeWords = [
  "bad",
  "poor",
  "worst",
  "terrible",
  "useless",
  "hate",
  "slow",
  "problem",
  "issue",
  "disappointed",
];

const lowerMessage = message.toLowerCase();

const positiveCount = positiveWords.filter((word) =>
  lowerMessage.includes(word)
).length;

const negativeCount = negativeWords.filter((word) =>
  lowerMessage.includes(word)
).length;

if (positiveCount > negativeCount) {
  sentiment = "Positive";
} else if (negativeCount > positiveCount) {
  sentiment = "Negative";
}

const feedback = new Feedback({
  message,
  sentiment,
  user: req.user.id,
});

    await feedback.save();

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedback,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("user", "name email");

    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
exports.getFeedbackStats = async (req, res) => {
  try {
    const total = await Feedback.countDocuments();

    const positive = await Feedback.countDocuments({
      sentiment: "Positive",
    });

    const negative = await Feedback.countDocuments({
      sentiment: "Negative",
    });

    const neutral = await Feedback.countDocuments({
      sentiment: "Neutral",
    });

    res.json({
      total,
      positive,
      negative,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};