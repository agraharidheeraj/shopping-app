import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import MensOuterwear from './components/MensOuterwearSection/MensOuterwear';
import LadiesOuterwear from './components/LadiesOuterwearSection/LadiesOuterwear';
import MensTShirts from './components/MensTShirtsSection/MensTShirts';
import LadiesTShirts from './components/LadiesTShirtsSection/LadiesTShirts';
import ItemDetails from './components/ItemsDetals/ItemDetails';
import ViewCart from './components/ViewCartSection/ViewCart'
import CheckoutPage from './components/CheckoutSection/ItemCheckout';
import Footer from './pages/Footer';
 
const App = () => {
  return (
    <Router>
      <div className='w-full h-full'>
        <Header />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mens-outerwear" element={<MensOuterwear/>} />
        <Route path="/ladies-outerwear" element={<LadiesOuterwear/>} />
        <Route path="/mens-t-shirts" element={<MensTShirts/>} />
        <Route path="/ladies-t-shirts" element={<LadiesTShirts/>} />
        <Route path="/item/:category/:itemName" element={<ItemDetails />} />
        <Route path="/cart" element={<ViewCart/>} />
        <Route path='/checkout' element={<CheckoutPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

