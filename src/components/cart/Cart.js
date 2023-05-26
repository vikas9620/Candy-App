import React, { useContext } from "react";
import CartContext from "../../store/CartContext";

import Modal from "../../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const deleteHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addHandler = (id) => {
    const existingItem = cartCtx.candies.find((item) => item.id === id);

    if (existingItem) {
      cartCtx.updateItem(id, existingItem.quantity + 1);
    } else {
      cartCtx.addItem(id, 1);
    }
  };

  const hasItems = cartCtx.candies.length > 0;

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.candies.map((item) => (
        <li className={classes.meal} key={item.id}>
          <div className={classes.details}>
            <div>
              <h3>{item.name}</h3>
              <div className={classes.price}>{item.price}</div>
            </div>
            <div className={classes.span}>X {item.amount}</div>
          </div>
          <div className={classes.btns}>
            <button className={classes.btn} onClick={() => deleteHandler(item.id)}>
              -
            </button>
            <button className={classes.btn} onClick={() => addHandler(item.id)}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  const price = cartCtx.candies.reduce(
    (currPrice, item) => currPrice + item.price * item.amount,
    0
  );

  const totalAmount = `$${price.toFixed(2)}`;

  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
