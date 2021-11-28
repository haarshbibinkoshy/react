import React, { useState,useContext } from 'react';
import  { FirebaseContext } from '../../store/Context';
import { useHistory,Link } from "react-router-dom";
import Logo from '../../olx-logo.png';
import './Login.css';


function Login() {
  const history=useHistory()
  const firebase = useContext(FirebaseContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  const handleLogin=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    history.push('/')
    var user = userCredential.user;
    console.log(user.displayName);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error.message)
  });

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src="../../../Images/Screenshot (91).png"></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e) =>{setEmail(e.target.value);console.log(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'><a>Signup</a></Link>
        
      </div>
    </div>
  );
}

export default Login;
