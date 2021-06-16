import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import PageLayout from '../../Components/PageLayout/PageLayout';
import Product from '../Product/Product';
import { ReactComponent as HeartIcon } from '../../Icons/heart-line.svg';

const Products = () => {
  let match = useRouteMatch();

  return (
    <PageLayout>
      <Switch>
        <Route path={`${match.path}/:productId`}>
          <Product />
        </Route>
        <Route path={`${match.path}`}>
          <>
            <div className="flex-container">
              <div>
                <div style={{ position: 'relative' }}>
                  <img
                    src="https://via.placeholder.com/300x400/3CB371/FFFFFF?text=Product+Placeholder+Image"
                    alt=""
                    style={{ display: 'block' }}
                  />
                  <span>
                    <button
                      class="button--heart"
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        margin: '1rem',
                      }}
                    >
                      <HeartIcon />
                    </button>
                  </span>
                </div>
                <div>
                  <h3>Product 1</h3>

                  <div>
                    <b>£19.99</b>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/300x400/3CB371/FFFFFF?text=Product+Placeholder+Image"
                  alt=""
                />
                <h3>Product 1</h3>
                <div>
                  <b>£19.99</b>
                </div>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/300x400/3CB371/FFFFFF?text=Product+Placeholder+Image"
                  alt=""
                />
                <h3>Product 1</h3>
                <div>
                  <b>£19.99</b>
                </div>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/300x400/3CB371/FFFFFF?text=Product+Placeholder+Image"
                  alt=""
                />
                <h3>Product 1</h3>
                <div>
                  <b>£19.99</b>
                </div>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/300x400/3CB371/FFFFFF?text=Product+Placeholder+Image"
                  alt=""
                />
                <h3>Product 1</h3>
                <div>
                  <b>£19.99</b>
                </div>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/300x400/3CB371/FFFFFF?text=Product+Placeholder+Image"
                  alt=""
                />
                <h3>Product 1</h3>
                <div>
                  <b>£19.99</b>
                </div>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/300x400/3CB371/FFFFFF?text=Product+Placeholder+Image"
                  alt=""
                />
                <h3>Product 1</h3>
                <div>
                  <b>£19.99</b>
                </div>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/300x400/3CB371/FFFFFF?text=Product+Placeholder+Image"
                  alt=""
                />
                <h3>Product 1</h3>
                <div>
                  <b>£19.99</b>
                </div>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/300x400/3CB371/FFFFFF?text=Product+Placeholder+Image"
                  alt=""
                />
                <h3>Product 1</h3>
                <div>
                  <b>£19.99</b>
                </div>
              </div>
            </div>
          </>
        </Route>
      </Switch>
    </PageLayout>
  );
};

export default Products;
