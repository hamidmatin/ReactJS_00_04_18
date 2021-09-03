import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Layout from '../../containers/layout';
import Product from './product';

const ProductsIndex = () => {
  const [productlist] = useState([
    { name: 'Product 1', price: 100, image: '/images/front-page-project-1.jpg' },
    { name: 'Product 2', price: 110, image: '/images/front-page-project-2.jpg' },
    { name: 'Product 3', price: 120, image: '/images/front-page-project-3.jpg' },
    { name: 'Product 4', price: 130, image: '/images/front-page-project-4.jpg' },
    { name: 'Product 5', price: 140, image: '/images/front-page-project-1.jpg' },
    { name: 'Product 6', price: 150, image: '/images/front-page-project-2.jpg' },
  ]);

  const cartList = useSelector(state => state.cartList)
  let sum = 0
  for (const cart of cartList) {
    sum += cart.price
  }

  return (
    <Layout title='Products'>
      <div style={{marginBottom: '30px', fontWeight: '900'}}>Total : {sum}</div>
      {productlist.map((p, idx) => (
        <Product product={p} key={idx} />
      ))}
    </Layout>
  );
};

export default ProductsIndex;
