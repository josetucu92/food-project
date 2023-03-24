import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { LandingPage } from "./pages/Landing/LandingPage";
import { CreateRecipePage } from "./pages/CreateRecipe/CreateRecipe";
import { DetailsPage } from "./pages/Details/DetailsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main-App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/home/:id" element={<DetailsPage />} />
          <Route exact path="/create-recipe" element={<CreateRecipePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
