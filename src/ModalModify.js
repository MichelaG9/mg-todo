import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class ModalModify extends Component{
    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
    }

    state = {
        input: this.props.todoText,
    }

    handleChange = (e) => {
        this.setState({input:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.input){
            this.props.modifyTodo(this.props.todoId, this.state.input);
        }
        this.setState({input: this.state.input});
    }

    render(){
        const {checkStatus} = this.props;
        return(
            <div className={checkStatus ? 'hide' : null}>
                <div className="input_button"><button data-target="modal1" className="btn-floating btn-small teal modal-trigger"><i className="material-icons">create</i></button></div>                
                <div id="modal1" className="modal">
                    <form type="submit">
                        <div className="modal-content">
                            <h5>Update your ToDo</h5>
                            <input onChange={this.handleChange} value={this.state.input} type="text"/>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.handleSubmit} className="modal-close btn modifyButton">SAVE</button>
                            <a className="modal-close btn modifyButton">CANCEL</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ModalModify