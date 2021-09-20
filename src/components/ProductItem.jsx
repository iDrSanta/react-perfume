import React from 'react';
import { useDispatch } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { setCart } from '../redux/actions/cart';

import { handleFavorites } from '../redux/actions/products';

function ProductItem({ obj }) {
  const dispatch = useDispatch();

  const handleFavorite = (id) => {
    dispatch(handleFavorites(id));
  };

  const addToCart = (obj) => {
    dispatch(setCart(obj));
  };

  return (
    <div className="item">
      <FavoriteIcon onClick={() => handleFavorite(obj.id)} />
      <img src={obj.imageUrl} alt="" />
      <div className="item-info">
        <div className="title">{obj.title}</div>
        <div className="brand">{obj.brand}</div>
        <div className="price">
          цена: {obj.price} руб{' '}
          <button onClick={() => addToCart(obj)} className="header-button">
            добавить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
