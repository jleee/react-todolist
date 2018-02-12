import React, { Component } from 'react';
import 'styles/TaskBar.css';

export default class TaskBar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTask(task) {
    if(task.length > 0) {
      this.props.addTask(task);
      this.setState({value: ''});
    }    
  }
  
  render() {
    return (
      <div className="col-md-6 col-centered">
        <div className="task-bar">
          <input 
            type="text" 
            name="task-bar"  
            value={this.state.value} 
            onKeyPress={e => {
              if(e.key === 'Enter') {
                this.addTask(this.state.value)
              }
            }}
            onChange={this.handleChange} 
            placeholder="Add new task"
          />
          <button id="task-bar-btn" onClick={() => this.addTask(this.state.value)}>Add</button>
        </div>
      </div>
    );
  }
}