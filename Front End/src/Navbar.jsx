import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Addbook">Add</Link>
        </li>
        <li>
          <Link to="/SeeBook">See</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;