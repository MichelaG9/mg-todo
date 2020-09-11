import React, { Component } from 'react';
import firebase from "firebase";
import M from "materialize-css";


class SignUp extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const signupForm = document.querySelector('#signup-form');
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();
            signupForm.reset();
            signupForm.querySelector('.error').innerHTML = '';
        }).catch(err => {
            signupForm.querySelector('.error').innerHTML = err.message;
        });
    }
    
    render(){
        return(
            <div>
                <div id="modal-signup" className="modal" onch>
                    <div className="modal-content">
                        <h4>Sign Up</h4><br></br>
                        <form id="signup-form">
                            <div className="input-field">
                                <input type="email" id="signup-email" className="reset" required />
                                <label htmlFor="signup-email" id="label">Email address</label>
                            </div>
                            <div className="input-field">
                                <input type="password" id="signup-password" className="reset" required />
                                <label htmlFor="signup-password" id="label">Password</label>
                                <p className="error red-text center-align"></p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.handleSubmit} className="btn teal">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default SignUp