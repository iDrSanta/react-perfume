import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFavorites } from '../redux/actions/products';
import ProductItem from '../components/ProductItem';

function FavoritesPage() {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.products);
  const { visibleProducts } = useSelector((state) => state.products);

  React.useEffect(() => {
    dispatch(setFavorites());
  }, [visibleProducts]);

  return (
    <div className="products-wrapper">
      {favorites.map((obj) => (
        <ProductItem key={obj.id} obj={obj} />
      ))}
    </div>
  );
}

export default FavoritesPage;
