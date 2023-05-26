import React, { useState } from "react";
import classes from "./CandyInputForm.module.css";
const CandyInputForm = (props) => {
  const [candyName, setCandyName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const nameCHangeHandler = (e) => {
    setCandyName(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();

    const newCandy = {
        name: candyName,
        description: description,
        price: price,
      };
  
      // Passing the new candy data to the parent component
      props.onAddCandy(newCandy);
  
      // Resetting the form fields
      setCandyName("");
      setDescription("");
      setPrice("");



  };
  return (
    <form className={classes.form} onSubmit={FormSubmitHandler}>
      <label>Candy Name</label>
      <input
        type="text"
        placeholder="candy name"
        value={candyName}
        onChange={nameCHangeHandler}
        required
      />
      <label>description</label>
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={descriptionChangeHandler}
        required
      />
      <label>price</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={priceChangeHandler}
        required
      />
      <button>add</button>
    </form>
  );
};
export default CandyInputForm;
