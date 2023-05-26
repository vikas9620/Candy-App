
import React, {useState} from 'react';
import './App.css';
import CandyInputForm from './components/CandyInputForm/CandyInputForm';
import Header from './components/Header/Header';
import CandyList from './components/CandyList/CandyList';
import CartProvider from './store/CartProvider';
import Cart from './components/cart/Cart';
function App() {
  const [candies, setCandies] = useState([]);

  const addCandyHandler = (newCandy) => {
    setCandies((prevCandies) => [...prevCandies, newCandy]);
  };

  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
    <CandyInputForm onAddCandy={addCandyHandler} />
    <CandyList candies={candies} />

    </CartProvider>
  );
}

export default App;
