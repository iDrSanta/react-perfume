import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setAllProducts, setVisibleProducts } from '../redux/actions/products';
import ProductItem from '../components/ProductItem';

function MainPage() {
  const dispatch = useDispatch();
  const { visibleProducts } = useSelector(({ products }) => ({
    visibleProducts: products.visibleProducts,
  }));

  return (
    <>
      <button onClick={() => dispatch(setAllProducts())} className="header-button sort-button">
        Все
      </button>
      <button onClick={() => dispatch(setVisibleProducts(0))} className="header-button sort-button">
        Для нее
      </button>
      <button onClick={() => dispatch(setVisibleProducts(1))} className="header-button sort-button">
        Для него
      </button>
      <div className="products-wrapper">
        {visibleProducts && visibleProducts.map((obj) => <ProductItem key={obj.id} obj={obj} />)}
      </div>
    </>
  );
}

export default MainPage;
