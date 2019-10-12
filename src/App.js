import React, { Component } from 'react';
import Header from 'components/Header';
import TaskBar from 'components/TaskBar';
import TaskList from 'components/TaskList';
import 'styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  componentDidMount() {
    const tasksItem = JSON.parse(localStorage.getItem('tasks'));
    tasksItem && this.setState({ tasks: tasksItem });
  }

  addTask(text) {
    const { tasks } = this.state;
    if (text.length > 0) {
      tasks.push({ text: text });
      this.setState({ tasks: tasks });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  removeTask(text, event) {
    const tasksItem = JSON.parse(localStorage.getItem('tasks'));
    const currentTask = event.currentTarget.parentElement;  
    const currentTaskKey = currentTask.getAttribute('data-key');
    const updatedTasks = tasksItem.filter((task, index) => index != currentTaskKey);

    this.setState({ tasks: updatedTasks });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  renderTasks() {
    const tasksItem = JSON.parse(localStorage.getItem('tasks'));
    return tasksItem && tasksItem.map((task, index) => <TaskList text={task.text} key={index} index={index} removeTask={this.removeTask} />);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Header/>
            <TaskBar addTask={this.addTask}/>
            <div className="col-md-6 col-centered">
              <div className="task-list">
                <p className="status"><span className="circle"></span> Task List</p>  
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
