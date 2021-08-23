import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Stats from "./pages/stats/stats";
import Help from "./pages/help/help";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "firebase/analytics";
import "firebase/auth";
import "./App.css"
import firebaseConfig from "./pages/initFirebase";

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  var user = firebaseConfig.auth().currentUser;
  return (
    <BrowserRouter>
      {(()=>{
          if(click==true){
            return <Help/>
          }
        })()}
       
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/register"><Register /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/home"><Home /></Route>
        <Route path="/write"><Write /></Route>
        <Route path="/settings"><Settings /></Route>
        <Route path="/about"><About/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/stats"><Stats /></Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        
      </Switch>
    </Router>
    <div style={{width:"80px",backgroundColor:"#1e3932",position:"fixed",bottom:"0px",zIndex:"1001"}} class="chat"  onClick={handleClick}>
      {click ? <i  style={{ fontSize:"50px",position:"fixed",marginLeft:"280px",marginBottom:"385px",fontSize:"30px",bottom:"0px",color:"#1e3932",zIndex:"1000"}} id="mm" className="fa fa-times" aria-hidden="true" ></i> :
      <i  style={{ fontSize:"50px",position:"fixed",marginLeft:"20px",marginBottom:"20px",bottom:"0px",color:"#1e3932",zIndex:"1000"}} id="mm" className="fa fa-comment" aria-hidden="true" ></i>
      }
     
      </div>

    </BrowserRouter>

  );

}

export default App;
