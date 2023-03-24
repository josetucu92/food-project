import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { LandingPage } from "./pages/Landing/LandingPage";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import Details from "./components/Details/Details";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main-App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/home/:id" element={<Details />} />
          <Route exact path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
