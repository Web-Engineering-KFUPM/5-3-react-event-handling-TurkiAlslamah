import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {/* Show placeholder if no tasks */}
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}       // pass id separately
            text={task.text}   // pass text separately
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
}
