import React, { Component } from 'react';
import 'styles/TaskList.css';

export default class TaskList extends Component {
  removeTask(id) {
    this.props.removeTask(id);
  }
  
  render() {
    return (
      <div className="checkbox">
          <input type="checkbox" className="checkbox-round"/><label>{this.props.todo.text}</label>
          <button className="remove-btn" onClick={(e) => this.removeTask(this.props.id)}></button>                  
      </div>
    );
  }
}