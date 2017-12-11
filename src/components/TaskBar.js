import React, { Component } from 'react';
import 'styles/TaskBar.css';

export default class TaskBar extends Component {
  render() {
    return (
      <div className="col-md-6 col-centered">
      	<div className="task-bar">
      		<input type="text" name="task-bar" placeholder="Add new task"/>
      		<button id="task-bar-btn">Add</button>
      	</div>
      </div>
    );
  }
}