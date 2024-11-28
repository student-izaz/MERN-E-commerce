import { createContext, useReducer } from "react";

// let cartIte

export const CartContext = createContext({
  cartItem: [],
  addToCart: () => {},
  removeCartItem: () => {},
});

const cartListReducer = (currCartItem, action) => {
    let newCartItem = currCartItem;
    if (action.type === 'ADD_TO_CART'){
        newCartItem = [...currCartItem, action.payload.product];
    }else if(action.type === 'REMOVE_CART_ITEM'){
        newCartItem = [...currCartItem, currCartItem]
    }
    return newCartItem;
}

const ContextProvider = ({ children }) => {
  const [cartItem, dispatchCartItem] = useReducer(cartListReducer, [])

  const addToCart = (product) => {
    dispatchCartItem({
        type: 'ADD_TO_CART',
        payload: {
            product
        }
    })
  };

  const removeCartItem = (product) => {
    dispatchCartItem({
        type: 'REMOVE_CART_ITEM',
        payload: {
            product
        }
    })
  };

  return (
    <CartContext.Provider value={{cartItem, addToCart, removeCartItem}}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
