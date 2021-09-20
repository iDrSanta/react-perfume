export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});

export const setFavorites = () => ({
  type: 'SET_FAVORITE',
});

export const handleFavorites = (id) => ({
  type: 'HANDLE_FAVORITES',
  payload: id,
});
