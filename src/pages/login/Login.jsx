import { AuthContext } from "../auth";
import React,{ useContext } from "react";
import { Link } from "react-router-dom"; 
import { Redirect } from "react-router-dom";
import { Context } from "../../context/Context";
import Home from "../home/Home";
import "./login.css";
import TopBar from "../../components/topbar/TopBar";

import swal from 'sweetalert';
import firebaseConfig from "../initFirebase";
import { useHistory } from "react-router-dom";
export var user;
var userData;

export default function Login() {
   const handleSubmit = (e) => {
     
    e.preventDefault();
    const { email, password } = e.target.elements;
    firebaseConfig.auth().signInWithEmailAndPassword(email.value,password.value)
            .then(function(){
              user = firebaseConfig.auth().currentUser;
              
              firebaseConfig.firestore().collection("users")
                .doc(user.email)
                .get()
                .then(doc => {
                  var data = doc.data();
                  userData = data['name'];
                  swal({
                    title:"Logged In Successfully !",
                    text: `welcome ${userData}`,
                    icon:"success",
                    buttons:false, 
                    timer:2000
                  });
                  sessionStorage.setItem("isLoggedIn", "true");
                  sessionStorage.setItem("username", userData);
                  window.location = "/home";
                  
                });
            })
          
            .catch(function(error) {
          var errorMessage = error.message;
            swal({
              title:"Error!",
              text:errorMessage,
              buttons:false,
              timer:2000,
              icon:"error"
            }); 
            });
          };

  return (
    <>
    <TopBar />
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" 
        onSubmit={handleSubmit}>
       <label for="email">Email</label>
        <input className="loginInput" type="email" name="email" placeholder="Email" />

        <label for="password">Password</label>
        <input className="loginInput"  type="password" name="password" placeholder="Password" />
        <button className="loginButton" type="submit" >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
</>
  );
}


