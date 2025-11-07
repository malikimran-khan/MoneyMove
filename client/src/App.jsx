import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Hero } from "./pages/Home-page/Hero";
import { Footer1 } from "./components/Footer1";
import { Footer2 } from "./components/Footer2";
import { Contact } from "./pages/Contact/Contact";
import { Faqs } from "./pages/FAQ/Faqs";
import { Traders } from "./pages/Traders";
import { Fintec } from "./pages/Fintec-care/Fintec";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Traders" element={<Traders/>} />
           <Route path="/Contact" element={<Contact />} />
        <Route path="/Faqs" element={<Faqs />} />
               <Route path="/Fintec" element={<Fintec/>} />
      </Routes>
      <Footer1 />
      <Footer2 />
    </Router>
  );
}

export default App;
