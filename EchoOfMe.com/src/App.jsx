import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavMenue from "./Components/Navmenu/NavMenu";
import Description from "./Components/Description/Description";
import Projectsection from "./Components/ProjectSection/projectSection";
import About from "./Components/About/About";
import ContactMe from "./Components/Contactme/contactMe";
import Footer from "./Components/Footer/footer";
import Modal from "react-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="App">
        <div className="Navmaue_fld">
          <NavMenue openModal={openModal} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Description />
                <Projectsection />
              </>
            }
          />
          <Route path="/projects" element={<Projectsection />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <div className="fotter_field">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
