import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    if (text.trim() === "") return; 
    const newTask = { id: Date.now(), text };
    setTasks((prev) => [...prev, newTask]);
    setText(""); // clear input
  };

  const handleDelete = (id) => {
    // filter out the task with the given id
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleClearAll = () => {
    // clear all tasks
    setTasks([]);
  };

  return (
    <section className="card">
      {/* Controlled Input */}
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/* Optional: show live text */}
      <p>{text}</p>

      {/* Render Task List and Enable Delete */}
      <TaskList tasks={tasks} onDelete={handleDelete} />

      {/* Clear All */}
      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
