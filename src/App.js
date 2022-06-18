import { Routes, Route } from 'react-router-dom'
import { Authentication, ForgetPassword, Home, WishList } from './_pages/index';

function App() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Authentication />} />
      <Route path={'/forget'} element={ <ForgetPassword />} />
      <Route path={'/home'} element={ <Home />} />
      <Route path={'/wishlist'} element={ <WishList />} />
    </Routes>
  );
}

export default App;
