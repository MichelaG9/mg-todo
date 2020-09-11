import React, { useState, useEffect } from 'react';
import Todos from './Todos'
import db from './firebase';
import firebase from "firebase";
import InputField from './InputField';
import './App.css';
import NavBar from './NavBar';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => { 
     firebase.auth().onAuthStateChanged(user => {
      if(user) {
        db.collection("todos").where("user", "==", user.uid).onSnapshot(snapshot => {
          setTodos(snapshot.docs.map(doc => {return({todo:doc.data().todo, id:doc.id, user: doc.data().user, itsChecked: doc.data().itsChecked, date: doc.data().date})}))
         });
        document.querySelector('.logout-container').classList.add('hide');
        document.querySelector('.App').classList.remove('hide');
        document.querySelector('.logged-in').classList.remove('hide');
        const loggedOut = document.querySelectorAll('.logged-out');
        loggedOut.forEach(item => {
          item.classList.add('hide');
        });
      } else {
        setTodos([]);
        document.querySelector('.App').classList.add('hide');
        document.querySelector('.logout-container').classList.remove('hide');
        document.querySelector('.logged-in').classList.add('hide');
        const loggedOut = document.querySelectorAll('.logged-out');
        loggedOut.forEach(item => {
          item.classList.remove('hide');
        });
      }
    })
    
  }, [])

  const addTodo = (todo) => {
    db.collection('todos').add({
      todo: todo,
      itsChecked: false,
      date: new Date(),
      user: firebase.auth().currentUser.uid
    })
  }

  const deleteTodo = (id) => {
    db.collection('todos').doc(id).delete()
  }

  const handleCheck = (id, check) => {
    db.collection('todos').doc(id).update({
        itsChecked: !check,
    })
  }

  const modifyTodo = (id, newTodo) => {
    db.collection('todos').doc(id).update({
      todo: newTodo,
    })
  }

  return (
    <div>
      <NavBar />
      <div className="logout-container container hide">
        <h2 className='center teal-text'>Todo App</h2>
        <br></br>
        <div className="center"><img src={require("./Image/todo.png")}/></div>
        <br></br>
        <h3 className='center teal-text'>Welcome!</h3>
        <h4 className='center teal-text'>Login/Sign up to start.</h4>
        <br></br>
        <h6 className='center teal-text'>(IMPORTANT! This App was built with only learning purpose, you can use fake emails to sign up)</h6>
      </div>
      <div className="App container hide">
        <h2 className='center teal-text'>Todo App</h2>
        <InputField addTodo={addTodo}/>
        <Todos todos={todos.sort((a, b) => (a.date > b.date) ? -1 : 1)} deleteTodo={deleteTodo} handleCheck={handleCheck} modifyTodo={modifyTodo}/>
      </div>
    </div>
  );
}

export default App;
