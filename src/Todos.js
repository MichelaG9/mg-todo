import React, { Component } from 'react';
import ModalModify from './ModalModify';

class Todos extends Component{

    render(){
        const {todos} = this.props;
        const todoList = todos.map(todo => {
            return(
                    <li className="collection-item todo_list no-padding" key={todo.id}>
                        <div className="todo_content">
                            <div>
                                <label>
                                    <input type="checkbox" onClick={(e) => {this.props.handleCheck(todo.id, todo.itsChecked)}} defaultChecked={todo.itsChecked ? 'checked' : null}/>
                                    <span></span>
                                </label>
                            </div>
                            <div className={todo.itsChecked ? 'line_throgh text_size' : 'text_size'} >{todo.todo}</div>
                        </div>
                        <div className="icons_box">
                            <ModalModify checkStatus={todo.itsChecked} todoId={todo.id} todoText={todo.todo} modifyTodo={this.props.modifyTodo}/>
                            <div className="input_button"><button onClick={(e) => {this.props.deleteTodo(todo.id)}} className="btn-floating btn-small waves-effect waves-light teal"><i className="material-icons">delete</i></button></div>
                        </div>
                    </li>
            )
        })
        return(
            <div>
                <ul className="todos collection">
                    {todoList}
                </ul>
            </div>
        )
    }
}

export default Todos