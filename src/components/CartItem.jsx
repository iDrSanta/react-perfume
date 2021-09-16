import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function CartItem({ title, brand, price, imageUrl, onRemove }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="cart-item__info">
        <div className="cart-item__title">{title}</div>
        <div className="cart-item__brand">{brand}</div>
      </div>

      <div className="cart-item__price">{price}руб</div>
      <DeleteIcon onClick={onRemove} />
    </div>
  );
}

export default CartItem;
