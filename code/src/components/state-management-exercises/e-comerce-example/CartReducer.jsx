export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find(i => i.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        };
      }
      return { ...state, items: [...state.items, { ...action.product, quantity: 1 }] };
    }
    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.id ? { ...i, quantity: action.quantity } : i
        )
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
}