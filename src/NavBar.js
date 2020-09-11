import React, { Component, useEffect } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import SignUp from './SignUp';
import Login from './Login';
import firebase from "firebase";


class NavBar extends Component{

    componentDidMount() {
        let el = document.querySelector(".sidenav");
        M.Sidenav.init(el, {
            edge: "left",
            inDuration: 250
        })

        let modal = document.querySelectorAll(".modal");
        M.Modal.init(modal, {
            onCloseEnd: function(){
                const inputs = document.querySelectorAll(".reset");
                const labels = document.querySelectorAll("#label");
                inputs.forEach(input => {
                    input.value= null;
                })
                labels.forEach(label => {
                    label.classList.remove("active");
                })
                const errors = document.querySelectorAll('.error');
                errors.forEach(error => {
                    error.innerHTML = '';
                })
            }
        })
        
    }

    handleLogout = (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            console.log('user logged out');
        })
    }
    
    render(){
        
        return(

            <div className="nav-bar">

                <nav>
                    <div className="nav-wrapper teal">
                        <ul className="right">
                            <li className="logged-out"><a href="#modal-login" className="modal-trigger">Login</a></li>
                            <li className="logged-out"><a href="#modal-signup" className="modal-trigger">Sing Up</a></li>
                            <li className="logged-in"><a href="#" id="logout" onClick={this.handleLogout}>Logout</a></li>
                        </ul>
                    </div>
                </nav>

                <SignUp />
                <Login />

            </div>
            
        )
    }
}

export default NavBar