const initialState = {
  items: [],
  visibleProducts: [],
  favorites: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        items: action.payload,
      };
    case 'ALL_VISIBLE_PRODUCTS':
      return {
        ...state,
        visibleProducts: state.items,
      };
    case 'VISIBLE_PRODUCTS':
      return {
        ...state,
        visibleProducts: state.items.filter((item) => item.category === action.category),
      };
    case 'SET_FAVORITE':
      return {
        ...state,
        favorites: state.items.filter((item) => item.favorite),
      };
    case 'HANDLE_FAVORITES':
      return {
        ...state,
        items: state.items.map((item) => ({
          ...item,
          favorite: item.id === action.payload ? !item.favorite : item.favorite,
        })),
      };

    default:
      return state;
  }
};

export default productsReducer;
