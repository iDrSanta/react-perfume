import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { useDispatch } from 'react-redux';

function MainPage() {
  const dispatch = useDispatch();
  const qwe = useSelector((state) => state);
  const { items } = useSelector(({ products }) => ({
    items: products.items,
  }));

  return (
    <>
      <button className="header-button sort-button">Все</button>
      <button className="header-button sort-button">Для нее</button>
      <button className="header-button sort-button">Для него</button>
      <div className="products-wrapper">
        {items && items.map((obj) => <ProductItem key={obj.id} obj={obj} />)}
      </div>
    </>
  );
}

export default MainPage;
