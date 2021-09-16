const initialState = {
  items: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default productsReducer;
