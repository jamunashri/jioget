import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Authentication, ForgetPassword, Home, WishList, Product, SingleProduct } from './_pages/index';

function App() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Authentication />} />
      <Route path={'/forget'} element={ <ForgetPassword />} />
      <Route path={'/home'} element={ <Home />} />
      <Route path={'/wishlist'} element={ <WishList />} />
      <Route path={'/product'} element={ <Product />} />
      <Route path={'/singleProduct'} element={ <SingleProduct />} />
      
      
    </Routes>
  );
}

export default App;
