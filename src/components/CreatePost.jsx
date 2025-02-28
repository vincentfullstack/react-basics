import React, { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            body,
            userId: Date.now(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const data = await response.json();
      setTitle("");
      setBody("");
      console.log("Created", data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          value={body}
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit" disabled={loading}>
          submit
        </button>
      </form>
    </div>
  );
}
