//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './components/Home/Home';
import LandingPage from './components/Landing/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<LandingPage/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
