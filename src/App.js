import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navigation/Navbar';
import CategoryCard from './Components/ProductCard/CategoryCard';
import Disinfectants from './Pages/Disinfectants';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Category from './Components/Category/Category';
import FlashSale from './Components/FlashSale/FlashSale';
import { useState } from 'react';
import { useEffect } from 'react';
import CartContext from './ContextProvider/CartContext';
import Admin from './Components/Admin/Admin';
function App() {
  const initialTime = 2 * 60 * 60;
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          alert('Countdown completed!');
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <>
      <CartContext>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' Component={Home}>
          </Route>
          <Route path='/aahji' Component={Admin}></Route>
          <Route path='/disinfectants' element={<Disinfectants />}></Route>
          <Route path='/category' element={<Category />}></Route>
        </Routes>
        <FlashSale time={time}></FlashSale>
        <Footer></Footer>
      </CartContext>
    </>


  );
}

export default App;
