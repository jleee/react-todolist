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
      allTasksComplete: true,
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.clearTasks = this.clearTasks.bind(this);
  }

  componentDidMount() {
    const tasksItem = JSON.parse(localStorage.getItem('tasks'));
    const isAllTasksComplete = tasksItem?.every((task) => task.isComplete === true);
    tasksItem && this.setState({ tasks: tasksItem, allTasksComplete: isAllTasksComplete });
  }

  componentDidUpdate() {
    const { tasks } = this.state;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTask(text) {
    const { tasks } = this.state;
    if (text.length > 0) {
      tasks.push({ text: text, isComplete: false });
      const isAllTasksComplete = tasks.every((task) => task.isComplete === true);
      this.setState({ tasks: tasks, allTasksComplete: isAllTasksComplete });
    }
  }

  removeTask(event) {
    const { tasks } = this.state;
    const currentTaskKey = event.currentTarget.parentElement.getAttribute('data-key');
    const updatedTasks = tasks.filter((task, index) => index != currentTaskKey);
    const isAllTasksComplete = updatedTasks.every((task) => task.isComplete === true);
    this.setState({ tasks: updatedTasks, allTasksComplete: isAllTasksComplete });
  }

  updateTask(event) {
    const { tasks } = this.state;
    const currentTaskKey = event.currentTarget.parentElement.getAttribute('data-key');
    const updatedTasks = tasks.map((task, index) => {
      if (index == currentTaskKey) task.isComplete = event.target.checked;
      return task;
    });
    const isAllTasksComplete = updatedTasks.every((task) => task.isComplete === true);
    this.setState({ tasks: updatedTasks, allTasksComplete: isAllTasksComplete });
  }

  clearTasks() {
    this.setState({ tasks: [], allTasksComplete: true });
    localStorage.clear();
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
    const { tasks, allTasksComplete } = this.state;
    const taskCompleteStatus = allTasksComplete ? 'circle-green' : 'circle-red';
    const btnClearActive = tasks.length > 0 && 'btn-clear-active';
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Header />
            <TaskBar addTask={this.addTask} />
            <div className="col-md-6 col-centered">
              <div className="task-list animate animate-fade-down">
                <p className="status">
                  <span className={`circle ${taskCompleteStatus}`}></span> Task List
                </p>
                {this.renderTasks()}
              </div>
              <button className={`btn btn-green btn-clear-tasks ${btnClearActive}`} onClick={this.clearTasks}>
                Clear tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
