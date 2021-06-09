import React from 'react';
import { useParams } from 'react-router';

const Product = () => {
  let { productId } = useParams();
  return <div>Product {productId}</div>;
};

export default Product;
