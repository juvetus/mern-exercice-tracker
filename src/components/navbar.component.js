import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Exercise Tracker
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-aoto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Exercices
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Créer un exercise 
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Créer un utilisateur
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
