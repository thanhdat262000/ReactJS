import React, {Component} from 'react';
import { render } from 'react-dom';
import './TodoItems.css';
var classNames = require('classnames');
class TodoItem extends Component {
    render() {
        var className = classNames({
            'TodoItem':true,
            'TodoItem-complete': this.props.state,
        })
    return (
        <div className={className}>
            <p>{this.props.title}</p>
        </div>
    )
    }
}
export default TodoItem;