import React, { useContext, Fragment } from "react";
import appbg from '../../asset/appbg.jpg'
import CartContext from "../../store/CartContext";
import classes from "./Header.module.css";
import CartLogo from '../cart/CartLogo'


const Header = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.candies.reduce((total, candy) => total + candy.amount, 0);
  
    return (
      <Fragment>
        <header className={classes.header}>
          <h1>Candy</h1>
          <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}>
              <CartLogo />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalAmount}</span>
          </button>
        </header>
  
        <div className={classes["main-image"]}>
          <img src={appbg} alt="dine in" />
        </div>
      </Fragment>
    );
  };
export default Header;