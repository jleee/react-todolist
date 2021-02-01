import React, { Component } from 'react';
import Header from './components/Header';
import TaskBar from './components/TaskBar';
import TaskList from './components/TaskList';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  componentDidMount() {
    const tasksItem = JSON.parse(localStorage.getItem('tasks'));
    tasksItem && this.setState({ tasks: tasksItem });
  }

  addTask(text) {
    const { tasks } = this.state;
    if (text.length > 0) {
      tasks.push({ text: text, isComplete: false });
      this.setState({ tasks: tasks });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  removeTask(event) {
    const { tasks } = this.state;
    const currentTaskKey = event.currentTarget.parentElement.getAttribute('data-key');
    const updatedTasks = tasks.filter((task, index) => index != currentTaskKey);

    this.setState({ tasks: updatedTasks });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  updateTask(event) {
    const { tasks } = this.state;
    const currentTaskKey = event.currentTarget.parentElement.getAttribute('data-key');
    const updatedTasks = tasks.map((task, index) => {
      if (index == currentTaskKey) task.isComplete = event.target.checked;
      return task;
    });

    this.setState({ tasks: updatedTasks });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  renderTasks() {
    const { tasks } = this.state;
    return tasks.map((task, index) => (
      <TaskList
        text={task.text}
        isComplete={task.isComplete}
        key={index}
        index={index}
        updateTask={this.updateTask}
        removeTask={this.removeTask}
      />
    ));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Header />
            <TaskBar addTask={this.addTask} />
            <div className="col-md-6 col-centered">
              <div className="task-list">
                <p className="status">
                  <span className="circle"></span> Task List
                </p>
                {this.renderTasks()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
