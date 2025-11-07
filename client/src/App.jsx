import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Hero } from "./pages/Home-page/Hero";
import { Footer1 } from "./components/Footer1";
import { Footer2 } from "./components/Footer2";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} /> 
      </Routes>
      <Footer1 />
      <Footer2 />
    </Router>
  );
}

export default App;
