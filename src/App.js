import React, { Component } from 'react';
import Header from 'components/Header';
import TaskBar from 'components/TaskBar';
import TaskList from 'components/TaskList';
import 'styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 0, text: 'Buy birthday present for friend'},
        {id: 1, text: 'Pick up groceries at supermarket'},
        {id: 2, text: 'Make chicken noodle soup'},
        {id: 3, text: 'Clean up house'}
      ],
      nextId: 4
    }

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(taskText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: taskText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTask(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  render() {
    const tasks = this.state.todos.map((todo) => {
      return <TaskList todo={todo} key={todo.id} id={todo.id} removeTask={this.removeTask}/>
    });
    
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Header/>
            <TaskBar taskText="" addTask={this.addTask}/>
            <div className="col-md-6 col-centered">
              <div className="task-list">
                <p className="status"><span className="circle"></span> Task List</p>  
                {tasks}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}