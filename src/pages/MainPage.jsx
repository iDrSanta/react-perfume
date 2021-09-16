import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../components/ProductItem';

import { setCart } from '../redux/actions/cart';

function MainPage({ data }) {
  const dispatch = useDispatch();
  const { items } = useSelector(({ products }) => ({
    items: products.items,
  }));

  const addToCart = (obj) => {
    dispatch(setCart(obj));
  };
  return (
    <div className="products-wrapper">
      {items &&
        items.map((obj) => <ProductItem key={obj.id} {...obj} onClick={() => addToCart(obj)} />)}
    </div>
  );
}

export default MainPage;
