export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_HIDE_CART': 
      return {
        ...state,
        showCart: !state.showCart,
      };
   
    case 'ADD_TO_CART':
      console.log('received ADD_TO_CART action with product:', action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
        
      };
    case 'REMOVE_FROM_CART':
      console.log('received Remove_from_cart action with product:', action.payload);
      return {
        ...state,
        cart: state.cart.filter(p => p.id !== action.payload)
      };
    default:
      return state;
  }
};
