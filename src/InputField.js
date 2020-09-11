import React, { Component } from 'react';


class InputField extends Component{
        state = {
            input: '',
        }

        handleChange = (e) => {
            this.setState({input:e.target.value});
          }

        handleSubmit = (e) => {
            e.preventDefault();
            if(this.state.input){
                this.props.addTodo(this.state.input);
            }
            this.setState({input: ''});
        }
          
    render(){

        return(
            <div>
                <div className="row col s12">
                    <form  className="col s8 offset-s2" type="submit">
                        <div className="input-field col s12 input_text no-padding">
                            <input onChange={this.handleChange} value={this.state.input} placeholder="What's next?" type="text" className="col s12 m10 validate"/>
                            <div className="no-padding"><button onClick={this.handleSubmit} className="btn-floating btn-medium waves-effect waves-light teal"><i className="material-icons">add</i></button></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default InputField