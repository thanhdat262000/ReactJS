import React, {Component} from 'react';
// import { render } from 'react-dom';
import './TodoItems.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';
import close from '../img/close.svg';
var classNames = require('classnames');
class TodoItem extends Component {
    render() {
        var className = classNames({
            'TodoItem':true,
            'TodoItem-complete': this.props.state,
        })
        let url = checkImg;
        if (this.props.state) {
            url = checkCompleteImg;
        }
    return (
        <div className={className} >
            <img src={url} alt='check' width={24} onClick={this.props.onClick}/>
            <p>{this.props.title}</p>
            <img className='close' src={close} alt='close' width={20} onClick={this.props.onClose} />
        </div>
    )
    }
}
export default TodoItem;