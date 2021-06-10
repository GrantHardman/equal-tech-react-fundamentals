import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './styles.css';
import { ReactComponent as AccountIcon } from '../../Icons/account-circle-line.svg';
import { ReactComponent as CartIcon } from '../../Icons/shopping-cart-line.svg';

const Header = () => {
  return (
    <header>
      <div className="skip-link">
        <a href="#main">Skip navigation</a>
      </div>
      <nav>
        <div className="link-section">
          <Link to="/" className="nav-logo-link">
            Trend
          </Link>
        </div>
        <div className="link-section">
          <ul>
            <li>
              <Link to="/products" className="nav-link">
                Womens
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                Mens
              </Link>
            </li>
          </ul>
        </div>
        <div className="link-section">
          <ul>
            <li>
              <Link to="/cart" className="nav-icon-link">
                <i>
                  <CartIcon />
                </i>
                <label>Cart</label>
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-icon-link">
                <i>
                  <AccountIcon />
                </i>
                <label>Login</label>
              </Link>
            </li>
          </ul>
        </div>
        {false ? <Menu /> : null}
      </nav>
    </header>
  );
};

export default Header;
