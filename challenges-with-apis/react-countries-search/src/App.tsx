import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeComponent } from "./pages/Home";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </Router>
  );
}
