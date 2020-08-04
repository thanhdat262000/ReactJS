import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItems';
import tick from './img/tick.svg';
class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem:'',
      currentFilter: 'all',
      checkAll: false,
      todoItems:[
      {title:'Go shopping', isComplete: true},
      {title:'Hit the gym', isComplete: false},
      {title:'Go to library', isComplete: false}
    ]
  }
  this.onKeyup= this.onKeyup.bind(this);
  this.onChange=this.onChange.bind(this);
  this.onClickAll=this.onClickAll.bind(this);
  this.onClickActive=this.onClickActive.bind(this);
  this.onClickCompleted=this.onClickCompleted.bind(this);
  this.onClickClear=this.onClickClear.bind(this);
  this.countLeft=this.countLeft.bind(this);
  this.tickAll=this.tickAll.bind(this);
  }
  onItemClicked(item) {
   return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
           },
          ...todoItems.slice(index+1)
        ]
      })
    }
  }
  onKeyup(event) {
    if(event.keyCode === 13) {
    let text = event.target.value;
    if (!text) return;
    text = text.trim();
    if(!text) return;
    this.setState({
      newItem:'',
      todoItems: [
        { title: text, isComplete: false},
        ...this.state.todoItems
      ]
    })
    }
  }
  onChange(event) {
    let value= event.target.value;
    this.setState({
      newItem: value
    })
  }
  onClickAll(event) {
    this.setState({
      currentFilter: 'all'
    })
  }
  onClickActive(event) {
    this.setState({
      currentFilter: 'active'
    })
  }
  onClickCompleted(event) {
    this.setState({
      currentFilter: 'completed'
    })
  }
  onClickClear(event) {
    this.setState({
      currentFilter:'clear',
      todoItems: this.state.todoItems.filter((item)=> item.isComplete===false)
    })
  }
  onClose(item) {
    return (event) => {
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index+1)
      ]
      })
    }
  }
  countLeft() {
    let countLeft=this.state.todoItems.filter((item)=> item.isComplete===false);
    return countLeft.length;
  }
  tickAll(event) {
    if (!this.state.checkAll) {
      this.setState({
        checkAll:true,
        todoItems: this.state.todoItems.map((item) => {return {...item, isComplete:true}})
      })
    } else {
      this.setState({
        checkAll:false,
        todoItems: this.state.todoItems.map((item) => {return {...item, isComplete:false}})
      })
    }
  }
  render() {
    const {newItem, currentFilter} = this.state;
    var todoItems=[];
    switch  (currentFilter) {
      case 'all':
      case 'clear':
        todoItems = this.state.todoItems;
        break;
      case 'active':
        todoItems=this.state.todoItems.filter((item)=> item.isComplete===false);
        break;
      case 'completed':
        todoItems=this.state.todoItems.filter((item)=> item.isComplete===true);
        break;
      default:
        break;
    }
  return (
    <div className="App">
      <div className ="Header">
        <img src={tick} width={24} alt='tick' onClick={this.tickAll}/>
        <input type='text'
         alt='check'
         placeholder='Add something...' 
         onKeyUp={this.onKeyup}
         value={newItem}
         onChange={this.onChange}/>
      </div>
        {todoItems.length> 0 &&todoItems.map((item, index) =>  
        <TodoItem 
        onClick={this.onItemClicked(item)}
        onClose={this.onClose(item)}
        key = {index} 
        title={item.title}
        state={item.isComplete}
        />)}
        {todoItems.length ===0 && 'Nothing here'}
        <div className = 'action'>
          <span className='todo-countLeft'>{this.countLeft()} items left</span>
          <button className='todo-all' type='button' onClick={this.onClickAll}>All</button>
          <button className='todo-active' type='button' onClick={this.onClickActive}>Active</button>
          <button className='todo-completed' type='button' onClick={this.onClickCompleted}>Completed</button>
          <button className='todo-clear' type='button' onClick={this.onClickClear}>Clear Completed</button>
        </div>
    </div>
  );
  }
}

export default App;
