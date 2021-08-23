import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import TopBar from "../../components/topbar/TopBar";
//import TopBar1 from "../../components/topbar1/TopBar1";
import firebaseConfig from "../initFirebase";
import { useHistory } from "react-router-dom";
var user = firebaseConfig.auth().currentUser;




export default function Home() {
  const history = useHistory();
  
  const [posts, setPosts] = useState([]);
  const { search } = useLocation()
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
    <TopBar />
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
