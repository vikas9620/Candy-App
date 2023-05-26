import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartCandies, setCartCandies] = useState([]);

  const addItemToCartHandler = (candy) => {
    setCartCandies((prevCartCandies) => {
      const existingCartItemIndex = prevCartCandies.findIndex(
        (cartItem) => cartItem.id === candy.id
      );

      if (existingCartItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        const updatedCartItems = [...prevCartCandies];
        const existingCartItem = updatedCartItems[existingCartItemIndex];
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + candy.quantity,
        };
        updatedCartItems[existingCartItemIndex] = updatedCartItem;
        return updatedCartItems;
      } else {
        // If the item does not exist in the cart, add it
        return [...prevCartCandies, candy];
      }
    });
  };

  const removeItemFromCartHandler = (id) => {
    setCartCandies((prevCartCandies) =>{
        const updatedCartCandies = prevCartCandies.map((candy) => {
        if (candy.id === id) {
          return {
            ...candy,
            amount: candy.amount - 1,
          };
        }
        return candy;
      });

      return updatedCartCandies.filter((candy) => candy.amount > 0);
     } )}

  
  const updateItemQuantity = (id, quantity) => {
    setCartCandies((prevCartCandies) =>
      prevCartCandies.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            amount: quantity,
          };
        }
        return cartItem;
      })
    );
  };

  const cartContext = {
    candies: cartCandies,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updateItem: updateItemQuantity,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
