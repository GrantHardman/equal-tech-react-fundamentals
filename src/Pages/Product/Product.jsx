import React from 'react';
import { useParams } from 'react-router';
import { ReactComponent as FilledStarIcon } from '../../Icons/star-fill.svg';
import { ReactComponent as StarIcon } from '../../Icons/star-line.svg';
import { ReactComponent as HeartIcon } from '../../Icons/heart-line.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const Product = () => {
  let { productId } = useParams();
  return (
    <div>
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link to="/products" className="breadcrumbs__link">
              Womens
            </Link>
          </li>
          <li>
            <Link to="/products" className="breadcrumbs__link">
              Category
            </Link>
          </li>
          <li>
            <span className="breadcrumbs__current-item">
              Product {productId}
            </span>
          </li>
        </ul>
      </nav>
      <div className="product-card">
        <div className="product-card__img-container">
          <img
            src="https://via.placeholder.com/450x600/3CB371/FFFFFF?text=Product+Placeholder+Image"
            alt=""
          />
        </div>
        <div className="product-card__info-container">
          <h1>Product {productId}</h1>
          <div>
            <b>£19.99</b>
          </div>
          <div className="product-card__rating">
            <span>Rating:</span>
            <span>
              <FilledStarIcon />
              <FilledStarIcon />
              <FilledStarIcon />
              <FilledStarIcon />
              <StarIcon />
            </span>
            <span>4.0 (4)</span>
          </div>
          <div className="product-card__color-selector">
            <label>Color: </label>
            <span>Blue</span>
          </div>
          <div className="product-card__size-selector">
            <label>Size:</label>
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="product-card__actions">
            <span>
              <button>ADD TO CART</button>
            </span>
            <span>
              <button class="button--heart">
                <HeartIcon />
              </button>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>You might also like</h2>
          <div className="product-recommendations">
            <div className="recommended-product-card">
              <img
                src="https://via.placeholder.com/200x250/3CB371/FFFFFF?text=Product+Placeholder+Image"
                alt=""
              />
              <h3>Product 2</h3>
              <span>
                <b>£9.99</b>
              </span>
            </div>
            <div className="recommended-product-card">
              <img
                src="https://via.placeholder.com/200x250/3CB371/FFFFFF?text=Product+Placeholder+Image"
                alt=""
              />
              <h3>Product 3</h3>
              <span>
                <b>£19.99</b>
              </span>
            </div>
            <div className="recommended-product-card">
              <img
                src="https://via.placeholder.com/200x250/3CB371/FFFFFF?text=Product+Placeholder+Image"
                alt=""
              />
              <h3>Product 4</h3>
              <span>
                <b>£29.99</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        <div>
          <h3>Ratings</h3>
          <p>
            <b>Average Rating:</b> 4.0
          </p>
          <div className="review-metric">
            <span>5 Stars </span>
            <div class="review-bar">
              <div
                class="review-bar-fill"
                style={{ height: '2rem', width: '25%' }}
              ></div>
            </div>
            <span>25%</span>
          </div>
          <div className="review-metric">
            <span>4 Stars </span>
            <div class="review-bar">
              <div
                class="review-bar-fill"
                style={{ height: '2rem', width: '50%' }}
              ></div>
            </div>
            <span>50%</span>
          </div>
          <div className="review-metric">
            <span>3 Stars </span>
            <div class="review-bar">
              <div
                class="review-bar-fill"
                style={{ height: '2rem', width: '25%' }}
              ></div>
            </div>
            <span>25%</span>
          </div>
          <div className="review-metric">
            <span>2 Stars </span>
            <div class="review-bar">
              <div
                class="review-bar-fill"
                style={{ height: '2rem', width: '0%' }}
              ></div>
            </div>
            <span>0</span>
          </div>
          <div className="review-metric">
            <span>1 Stars </span>
            <div class="review-bar">
              <div
                class="review-bar-fill"
                style={{ height: '2rem', width: '0%' }}
              ></div>
            </div>
            <span>0</span>
          </div>
        </div>
        <div>
          <h3>Awesome product</h3>
          <div>
            <span>Rating: </span>
            <span>
              <FilledStarIcon />
              <FilledStarIcon />
              <FilledStarIcon />
              <FilledStarIcon />
              <StarIcon />
            </span>
            <span>4</span>
            <div>Verified purchaser</div>
            <div>2 days ago</div>
          </div>
          <p>Love this, buy it now!</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
