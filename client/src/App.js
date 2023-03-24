import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { LandingPage } from "./pages/Landing/LandingPage";
import { CreateRecipePage } from "./pages/CreateRecipe/CreateRecipe";
import { DetailsPage } from "./pages/Details/DetailsPage";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="main-App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/home/:id" element={<DetailsPage />} />
        <Route exact path="/create-recipe" element={<CreateRecipePage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
