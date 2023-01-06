import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import RelaxSound from "./components/RelaxSound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const location = useLocation();

  return (
    <div className="h-screen relative text-white">
      <Header />

      <RelaxSound />
      <div className="h-screen bg-black flex justify-center">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
