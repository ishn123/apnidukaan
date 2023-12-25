import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navigation/Navbar';
import CategoryCard from './Components/ProductCard/CategoryCard';
import Disinfectants from './Pages/Disinfectants';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Category from './Components/Category/Category';
import { useContext, useState } from 'react';
import { useEffect } from 'react';

import Admin from './Components/Admin/Admin';
import Cosmetics from './Pages/Cosmetics';
import useCustomFetch from './Hooks/useFetch';
import { cartContext } from './ContextProvider/CartContext';
import CheckoutCart from './Components/CheckoutCart/CheckoutCart';
import FoodItems from './Pages/FoodItems';
import OralCare from './Pages/OralCare';
import FabricCare from './Pages/FabricCare';
import HairCare from './Pages/HairCare';
import CheckoutPage from './Pages/CheckoutPage';

function App() {
  return (
    <>
     
        <Navbar></Navbar>
        <Routes>
          <Route path='/' Component={Home}>
          </Route>
          <Route path='/aahji' Component={Admin}></Route>
          <Route path='/disinfectants' element={<Disinfectants />}></Route>
          <Route path='/cosmetics' element={<Cosmetics />}></Route>
          <Route path='/category' element={<Category />}></Route>
          <Route path='/checkout' Component={CheckoutCart}></Route>
          <Route path='/fooditems' Component={FoodItems}></Route>
          <Route path='/oralcare' Component={OralCare}></Route>
          <Route path='/fabriccare' Component={FabricCare}></Route>
          <Route path='/haircare' Component={HairCare}></Route>
          <Route path='/chekoutcomplete' Component={CheckoutPage}></Route>
        </Routes>
        <Footer></Footer>
      
    </>


  );
}

export default App;
