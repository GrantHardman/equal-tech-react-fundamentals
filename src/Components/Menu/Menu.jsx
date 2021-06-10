import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Menu;
