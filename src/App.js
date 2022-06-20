import { Routes, Route } from 'react-router-dom'
import { MainContent } from './_components';
import { Authentication, ForgetPassword, Home, WishList ,Cart , Product } from './_pages/index';

function App() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Authentication />} />
      <Route path={'/forget'} element={ <ForgetPassword />} />
      <Route path={'/home'} element={ <Home />} />
      <Route path={'/wishlist'} element={ <WishList />} />
      <Route path={'/cart'} element={<Cart />} />
      <Route path={'/product'} element={<Product />} />
      <Route path={'/'} element={<MainContent/>} />
    </Routes>
  );
}

export default App;
