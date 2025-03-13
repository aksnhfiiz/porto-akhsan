import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Pendidikan from "./pages/pendidikan";
import Skill from "./pages/skill";
import Pengalaman from "./pages/experience";
import Contact from "./pages/contact";
import About from "./pages/about";
import Proyek from "./pages/proyek";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pendidikan" element={<Pendidikan />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/pengalaman" element={<Pengalaman />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/proyek" element={<Proyek />} />
      </Routes>
    </div>
  );
}

export default App;

