import React from 'react';
import '../styles/TaskList.css';

const TaskList = ({ text, isComplete, index, removeTask, updateTask }) => {
  return (
    <div className="checkbox" data-key={index}>
      <input type="checkbox" checked={isComplete} className="checkbox-round" onChange={updateTask} />
      <label>{text}</label>
      <button className="remove-btn" onClick={removeTask}></button>
    </div>
  );
};

export default TaskList;
