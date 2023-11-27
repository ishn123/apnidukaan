import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navigation/Navbar';
import CategoryCard from './Components/ProductCard/CategoryCard';
import Disinfectants from './Pages/Disinfectants';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Category from './Components/Category/Category';
import FlashSale from './Components/FlashSale/FlashSale';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' Component={Home}>
        </Route>
        <Route path='/disinfectants' Component={Disinfectants}></Route>
        <Route path='/category' Component={Category}></Route>
      </Routes>
      <FlashSale></FlashSale>
      <Footer></Footer>
    </>
  );
}

export default App;
