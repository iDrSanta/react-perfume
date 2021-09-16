const initialState = {
  totalPrice: 0,
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM_FROM_CART':
      return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

export default cartReducer;
