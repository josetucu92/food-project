import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './components/Home/Home';
import LandingPage from './components/Landing/LandingPage';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<LandingPage/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/create' element={<CreateRecipe/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
