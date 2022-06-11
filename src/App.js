import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Authentication, ForgetPassword} from './_pages/index';

function App() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Authentication />} />
      <Route path={'/forget'} element={ <ForgetPassword />} />
    </Routes>
  );
}

export default App;
