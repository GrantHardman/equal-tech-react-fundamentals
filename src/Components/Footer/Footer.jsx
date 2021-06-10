import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { ReactComponent as FacebookIcon } from '../../Icons/facebook-box-line.svg';
import { ReactComponent as TwitterIcon } from '../../Icons/twitter-line.svg';
import { ReactComponent as InstagramIcon } from '../../Icons/instagram-line.svg';

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="footer__socials-section">
          <ul>
            <li>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i>
                  <FacebookIcon />
                </i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i>
                  <TwitterIcon />
                </i>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i>
                  <InstagramIcon />
                </i>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__links-section">
          <div className="help-links">
            <h4>Help &amp; Information</h4>
            <ul>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                <Link to="/track">Track an order</Link>
              </li>
              <li>
                <Link to="/returns">Delivery &amp; returns</Link>
              </li>
            </ul>
          </div>
          <div className="product-links">
            <h4>Products</h4>
            <ul>
              <li>
                <Link to="/products">Womens</Link>
              </li>
              <li>
                <Link to="/products">Mens</Link>
              </li>
            </ul>
          </div>
          <div className="about-links">
            <h4>About us</h4>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright-section">
          <div>&copy; 2021 Trend</div>
          <div>
            <Link to="/privacy">Privacy &amp; Cookies</Link>|
            <Link to="/terms">Terms &amp; Conditions</Link>|
            <Link to="/accessibility">Accessibility</Link>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
