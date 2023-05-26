import React from "react";


const CartContext= React.createContext({
    candies: [],
    totalAmount: 0,
    addItem: (candy) => {},
    removeItem: (id) => {},
    updateItem: (candyId, newAmount) => {}
});

export default CartContext