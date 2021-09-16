import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import CartItem from '../components/CartItem';
import { removeFromCart } from '../redux/actions/cart';

function CartPage() {
  const { items } = useSelector(({ cart }) => ({
    items: cart.items,
  }));
  const dispatch = useDispatch();
  console.log(items);
  return (
    <div className="container cart-wrapper">
      {!!items.length ? (
        items.map((item) => (
          <CartItem
            key={item.id}
            {...item.obj}
            onRemove={() => dispatch(removeFromCart(item.id))}
          />
        ))
      ) : (
        <div className="cart__empty">
          <div className="cart__empty-text">Корзина пуста</div>
          <SentimentVeryDissatisfiedIcon />
        </div>
      )}
    </div>
  );
}

export default CartPage;
