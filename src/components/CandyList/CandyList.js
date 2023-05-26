import React, { useContext } from "react";
import classes from "./CandyList.module.css";
import CartContext from "../../store/CartContext";

const CandyList = (props) => {
    const { candies } = props;
    const cartCtx = useContext(CartContext);
  
    const buyHandler = (candy, amount) => {
      const existingItemIndex = cartCtx.candies.findIndex((item) => item.id === candy.id);
  
      if (existingItemIndex !== -1) {
        const updatedCandies = [...cartCtx.candies];
        updatedCandies[existingItemIndex].amount += amount;
        cartCtx.updateItem(updatedCandies[existingItemIndex]);
      } else {
        cartCtx.addItem({
          id: candy.id,
          name: candy.name,
          price: candy.price,
          amount: amount,
        });
      }
    };
  
    return (
      <div className={classes.candy}>
        <div className={classes.card}>
          <h2>List of Candies</h2>
          {candies.length === 0 ? (
            <p>No candies added yet.</p>
          ) : (
            <ul>
              {candies.map((candy, index) => (
                <div key={index}>
                  <li>
                    <h3>{candy.name}</h3>
                    <p>Description: {candy.description}</p>
                    <p>Price: ${candy.price}</p>
                  </li>
                  <button onClick={() => buyHandler(candy, 1)}>Buy 1</button>
                  <button onClick={() => buyHandler(candy, 2)}>Buy 2</button>
                  <button onClick={() => buyHandler(candy, 3)}>Buy 3</button>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  

export default CandyList;
