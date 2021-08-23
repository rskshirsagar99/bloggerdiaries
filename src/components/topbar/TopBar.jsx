
import { Link , useHistory } from "react-router-dom";
import "./topbar.css";
import firebaseConfig from "../../pages/initFirebase";
import React, { Component } from "react";

const user = firebaseConfig.auth().currentUser;
var username = sessionStorage.getItem("username")
export default class TopBar extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
}

// Update navbar component when user logs in, to display "Login" or "Logout"
componentDidMount() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
        this.setState((prevState) => {
            if (!prevState.isLoggedIn) {
                return { isLoggedIn: true };
            }
        });
    }
    if (sessionStorage.getItem("isLoggedIn") === "false") {
        this.setState((prevState) => {
            if (prevState.isLoggedIn) {
                return { isLoggedIn: false };
            }
        });
    }
}
    
render() {
  return (
    <div className="top">
      <div className="topLeft">
      {this.state.isLoggedIn &&
            <span className="username">
            <span>{"Hi "+ username}</span>!
            </span>}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/home">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <a className="feedbackLink" href="https://forms.gle/ZHC31AN9dQLJ6X5NA" target="_blank">FEEDBACK</a>
          </li>
          {this.state.isLoggedIn && <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>}

          {this.state.isLoggedIn && <li className="topListItem">
            <Link className="link" to="/stats">
              STATS
            </Link>
          </li>}
          
        </ul>
      </div>
      <div className="topRight">
          {!this.state.isLoggedIn ? (
            <span className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </span>
                ) : (
          <span className="topListItem">
              <Link
                  to="/logout"
                  className="link"
                  onClick={() => {
                      window.sessionStorage.removeItem(
                          "isLoggedIn"
                      );
                      window.sessionStorage.removeItem(
                          "username"
                      );
                      window.location = "/home";
                  }}
                      >
                          LOGOUT
                      </Link>
                  </span>
              )}
              {!this.state.isLoggedIn && <span className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
          </span>}
        
      </div>
    </div>
  );
  }
}
