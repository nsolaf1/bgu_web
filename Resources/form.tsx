"use client";

import { useState } from "react";

const FormComponent = () => {
  // Step 1: Initialize state for each form input
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  // Step 2: Create a function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email.includes("@")) {
      setFeedback(`Thank you, ${name}, for submitting the form!`);
    } else {
      setFeedback("Please fill out the form correctly.");
    }
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <h1>Simple Form with Validation</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {feedback && (
        <p style={{ color: feedback.includes("Thank you") ? "green" : "red" }}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default FormComponent;
