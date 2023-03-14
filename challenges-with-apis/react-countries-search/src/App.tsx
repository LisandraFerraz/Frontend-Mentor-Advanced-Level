import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryDetailsComponent } from "./pages/Country-details";
import { HomeComponent } from "./pages/Home";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/:id" element={<CountryDetailsComponent />} />
      </Routes>
    </Router>
  );
}
