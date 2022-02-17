import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";
import Error404 from "./Error404";
import Login from "./components/Login/Login";
function App() {
  
  
  
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <NavBar />
      <Route path="/home" exact component={Home} />
      <Route path="/blog/:id" exact component={Blog} />
      <Route path="/new" exact component={NewBlogPost} />
      {/* <Route path="*"  component={Error404} /> */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
