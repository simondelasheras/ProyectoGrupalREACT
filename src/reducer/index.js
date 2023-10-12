import { TYPES } from "@/actions";

export const shoppingInitialState = {
  product: [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 50 },
    { id: 3, name: "Product C", price: 100 },
    { id: 4, name: "Product D", price: 150 },
    { id: 5, name: "Product E", price: 200 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch ((action, type)) {
    case TYPES.ADD_TO_CART:
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };

      break;
    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }
    default:
      break;
  }
}
