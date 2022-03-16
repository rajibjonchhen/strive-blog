import React,{useState, useEffect} from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./Error404";
import Login from "./components/Login/Login";

function App() {
  
  
  
  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/home" exact element={<Home/>} />
      <Route path="/blog/:id" exact element={<Blog/>} />
      <Route path="/new" exact element={<NewBlogPost/>} />
      <Route path="*"  component={Error404} />
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
