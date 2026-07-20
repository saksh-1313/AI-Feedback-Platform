import { useEffect, useState } from "react";
import axios from "axios";
import "./FeedbackList.css";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/feedback/",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setFeedbacks(res.data);
      } catch (err) {
        console.log("Error fetching feedbacks:", err);
      }
    };

    fetchFeedbacks();
  }, []);

  const filteredFeedbacks = feedbacks.filter((feedback) => {
    const matchesSearch = feedback.message
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || feedback.sentiment === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="feedback-list">
      <h1>Feedback Inbox</h1>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search feedback..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Positive">Positive</option>
          <option value="Negative">Negative</option>
          <option value="Neutral">Neutral</option>
        </select>
      </div>

      {filteredFeedbacks.length === 0 ? (
        <p>No feedback found.</p>
      ) : (
        filteredFeedbacks.map((feedback) => (
          <div className="feedback-item" key={feedback._id}>
            <h3>{feedback.message}</h3>

            <p>
              Sentiment: <strong>{feedback.sentiment}</strong>
            </p>

            <p>
              Submitted by:{" "}
              {feedback.user ? feedback.user.name : "Unknown User"}
            </p>

            <p>
              Date:{" "}
              {new Date(feedback.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default FeedbackList;