import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItems';
import { render } from 'react-dom';
class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      {title:'Go shopping', isComplete: true},
      {title:'Hit the gym', isComplete: true},
      {title:'Go to library', isComplete: true}
    ];
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.todoItems.length> 0 &&this.todoItems.map((item, index) =>  <TodoItem key = {index} title={item.title} state={item.isComplete}/>)}
        {this.todoItems.length ===0 && 'Nothing here'}
      </header>
    </div>
  );
  }
}

export default App;
