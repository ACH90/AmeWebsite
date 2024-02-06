import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accueil from "./../components/Accueil/Accueil";
import Agences from "./../components/Agences/Agences";
import Projets from "./../components/Projets/Projets";
import Actu from "./../components/Actu/Actu";
import Contact from "./../components/Contact/Contact";
import NavBar from "../components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/agences" element={<Agences />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/actu" element={<Actu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
