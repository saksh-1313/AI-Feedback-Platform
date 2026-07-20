import { useState } from "react";
import axios from "axios";

function Feedback() {
  const [message, setMessage] = useState("");

  const submitFeedback = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/feedback/add",
        { message },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert(res.data.message);
      setMessage("");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Feedback</h2>

      <form onSubmit={submitFeedback}>
        <textarea
          rows="5"
          cols="50"
          placeholder="Write your feedback..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;