import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import PageLayout from '../../Components/PageLayout/PageLayout';
import Product from '../../Components/Product/Product';

const Products = () => {
  let match = useRouteMatch();

  return (
    <PageLayout>
      <Switch>
        <Route path={`${match.path}/:productId`}>
          <Product />
        </Route>
        <Route path={`${match.path}`}>All products</Route>
      </Switch>
    </PageLayout>
  );
};

export default Products;
