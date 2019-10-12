import React from 'react';
import 'styles/TaskList.css';

const TaskList = ({ text, index, removeTask}) => (
  <div className="checkbox" data-key={index}>
    <input type="checkbox" className="checkbox-round"/><label>{text}</label>
    <button className="remove-btn" onClick={(event) => removeTask(text, event)}></button>                  
  </div>
);

export default TaskList;
