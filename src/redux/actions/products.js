export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});

export const setAllProducts = () => ({
  type: 'ALL_VISIBLE_PRODUCTS',
});

export const setVisibleProducts = (category) => ({
  type: 'VISIBLE_PRODUCTS',
  category,
});

export const setFavorites = () => ({
  type: 'SET_FAVORITE',
});

export const handleFavorites = (id) => ({
  type: 'HANDLE_FAVORITES',
  payload: id,
});
