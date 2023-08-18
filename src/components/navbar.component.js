import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
export default class Navbar extends Component {

  render() {
    
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand" >
        <Link to="/" className="navbar-brand">Taskify</Link>
      <div className="wrapper">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Tasks</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Task Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>
    );
    
  }
  
}