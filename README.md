# 🤖 AI Feedback Platform

An AI-powered feedback management platform that allows users to submit feedback and automatically analyzes the sentiment as Positive, Negative, or Neutral.

The platform provides a dashboard to monitor feedback statistics, view submitted feedback, manage registered users, and access user profiles.

---

## 🚀 Features

- 🔐 User Registration and Login
- 🔑 JWT-based Authentication
- 🛡️ Protected Routes
- 📝 Submit New Feedback
- 🤖 Automatic Sentiment Analysis
- 📊 Dashboard with Feedback Statistics
- 😊 Positive Feedback Count
- 😞 Negative Feedback Count
- 😐 Neutral Sentiment Detection
- 📥 Feedback Inbox
- 👥 Registered Users Management
- 👤 User Profile
- 🚪 Secure Logout
- 📱 Responsive and Professional UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)

### Tools
- Visual Studio Code
- Git
- GitHub
- Postman

---

## 🧠 Sentiment Analysis

The platform analyzes feedback using a keyword-based sentiment analysis approach.

### Positive Keywords
Examples:

- Good
- Great
- Excellent
- Amazing
- Useful
- Helpful
- Love
- Nice
- Best
- Happy

### Negative Keywords
Examples:

- Bad
- Poor
- Worst
- Terrible
- Useless
- Hate
- Slow
- Problem
- Issue
- Disappointed

The system compares positive and negative keywords in the submitted feedback and determines the overall sentiment.

---

## 📂 Project Structure

```text
AI-Feedback-Platform
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── ProtectedRoute.js
│   └── package.json
│
└── README.md
