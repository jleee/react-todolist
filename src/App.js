import React, { Component } from 'react';
import Header from 'components/Header';
import TaskBar from 'components/TaskBar';
import 'styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <TaskBar/>
      </div>
    );
  }
}