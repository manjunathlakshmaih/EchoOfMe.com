import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"; 
import "./App.css";
import NavMenue from "./Components/Navmenu/NavMenu";
import Description from "./Components/Description/Description";
import Projectsection from "./Components/ProjectSection/projectSection";
import About from './Components/About/About';
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
        <div>
          <Description />
        </div>
        <div>
          <Projectsection />
        </div>
        <Modal 
          isOpen={isModalOpen} 
          onRequestClose={closeModal} 
          contentLabel="About Modal"
          className="modal-content"  
          overlayClassName="modal-overlay"  
        >
          <About />  
          <button className="close_btn" onClick={closeModal}>Close</button> 
        </Modal>
      </div>
    </Router>
  );
}

export default App;
