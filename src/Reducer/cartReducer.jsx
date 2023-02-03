export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('received ADD_TO_CART action with product:', action.product);
      return {
        ...state,
        cart: [...state.cart, action.product],
        
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(p => p.id !== action.id)
      };
    default:
      return state;
  }
};
