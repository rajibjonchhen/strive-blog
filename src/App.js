import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error404 from "./Error404";
import Login from "./components/Login/Login";
import { Redirect } from "react-router-dom";
// import MyLayout from "./MyLayout";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/"  component={<MyLayout>
        <Login/>
      </MyLayout>} /> */}
      <Switch>
     
        <Route path="/" exact component={Login} />
        <NavBar />
        <Route path="/home" exact component={Home} />
        <Route path="/blog/:id" exact component={Blog} />
        <Route path="/new" exact component={NewBlogPost} />
        
      </Switch>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
