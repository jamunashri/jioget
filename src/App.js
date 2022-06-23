import { Routes, Route } from 'react-router-dom'
import {  MainContent } from './_components';
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
      <Route path={'/product/1'} element={<MainContent/>} />
    </Routes>
  );
}

export default App;


// import { Routes, Route } from 'react-router-dom'
// import { Authentication, ForgetPassword, Home, WishList ,Cart , Product } from './_pages/index';

// function App() {
//   function payment_success  () {
//     return (
//       <><h1> Payment sucessfully done</h1>

//       </>
//     )
//   }
//   function payment_fail  () {
//     return (
//       <><h1> Payment is not done</h1>

//       </>
//     )
//   }
//   return (
//     <Routes>
//       <Route exact path={'/'} element={<Authentication />} />
//       <Route path={'/forget'} element={ <ForgetPassword />} />
//       <Route path={'/home'} element={ <Home />} />
//       <Route path={'/wishlist'} element={ <WishList />} />
//       <Route path={'/cart'} element={<Cart />} />
//       <Route path={'/product'} element={<Product />} />
//       <Route path={'/payment_success'} element={<payment_success />} />
//       <Route path={'/product'} element={<payment_fail />} />
//     </Routes>
//   );
// }

// export default App;
