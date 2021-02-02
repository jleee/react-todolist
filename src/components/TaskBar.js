import React, { Component } from 'react';
import '../styles/TaskBar.css';

class TaskBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue(event) {
    this.setState({ taskText: event.target.value });
  }

  addTask(taskText) {
    const { addTask } = this.props;
    addTask(taskText);
    this.setState({ taskText: '' });
  }

  render() {
    const { taskText } = this.state;
    return (
      <div className="col-md-6 col-centered">
        <div className="task-bar animate animate-fade-down">
          <input
            type="text"
            name="task-bar"
            value={taskText}
            onKeyPress={(event) => event.key === 'Enter' && this.addTask(taskText)}
            onChange={this.handleInputValue}
            ref={(input) => input?.focus()}
            placeholder="Add new task"
          />
          <button className="btn-task-bar btn btn-green" onClick={() => this.addTask(taskText)}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default TaskBar;
