import React, { Component } from 'react';
import firebase from "firebase";
import M from "materialize-css";

class Login extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const loginForm = document.querySelector('#login-form');
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();
            loginForm.reset();
            loginForm.querySelector('.error').innerHTML = '';
        }).catch(err => {
            loginForm.querySelector('.error').innerHTML = err.message;
        });
        
    }
        
    render(){
        
        return(
            <div>
                <div id="modal-login" className="modal">
                    <div className="modal-content">
                        <h4>Login</h4><br></br>
                        <form id="login-form">
                            <div className="input-field">
                                <input type="email" id="login-email" className="reset" required />
                                <label htmlFor="login-email" id="label">Email address</label>
                            </div>
                            <div className="input-field">
                                <input type="password" id="login-password" className="reset" required />
                                <label htmlFor="login-password" id="label">Your password</label>
                                <p className="error red-text center-align"></p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.handleSubmit} className="btn teal">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login