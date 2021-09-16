let nextItemCartId = 0;

export const setCart = (obj) => ({
  type: 'ADD_TO_CART',
  payload: { id: nextItemCartId++, obj },
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: id,
});
