import React from 'react';
import '../styles/TaskList.css';

const TaskList = ({ text, isComplete, index, removeTask, updateTask }) => {
  return (
    <div className="checkbox" data-key={index}>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isComplete}
        className="checkbox-round"
        onChange={updateTask}
      />
      <label for={`checkbox-${index}`}>{text}</label>
      <button role="button" aria-label="Delete task" className="remove-btn" onClick={removeTask}></button>
    </div>
  );
};

export default TaskList;
