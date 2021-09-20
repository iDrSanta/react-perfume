const initialState = {
  totalPrice: 0,
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],

        totalPrice: state.totalPrice + action.payload.obj.price,
      };
    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
        totalPrice: state.totalPrice - action.price,
      };
    default:
      return state;
  }
};

export default cartReducer;
