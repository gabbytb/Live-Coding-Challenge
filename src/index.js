import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import Registration from "./components/Registration";
// import Login from "./components/Login";
import LoginUser from './components/LoginUser';
import Dashboard from "./components/Dashboard";
import AccountUsers from "./components/AccountUsers";
import CreatePost from "./assets/dashboard/blog/CreatePost";








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/blog" element={<Posts />}></Route>
        <Route path="/blog/post/:_id" component={<SinglePost />}></Route>
        <Route path="/user/signup" element={<Registration />}></Route>
        <Route path="/user/login" element={<LoginUser />}></Route>     
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/users/manage" element={<AccountUsers />}></Route>
        <Route path="/admin/posts/manage/create" element={<CreatePost />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();