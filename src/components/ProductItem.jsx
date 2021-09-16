import React from 'react';

function ProductItem({ title, brand, price, imageUrl, onClick }) {
  return (
    <div className="item">
      <img src={imageUrl} alt="" />
      <div className="item-info">
        <div className="title">{title}</div>
        <div className="brand">{brand}</div>
        <div className="price">
          цена: {price} руб{' '}
          <button onClick={onClick} className="header-button">
            добавить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
