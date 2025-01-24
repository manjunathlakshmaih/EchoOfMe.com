import "./App.css";
import NavMenue from "./Components/Navmenu/NavMenu";
import Description from "./Components/Description/Description";
import Projectsection from './Components/ProjectSection/projectSection';

function App() {
  return (
    <div className="App">
      <div className="Navmaue_fld">
        <NavMenue />
      </div>
      <div>
      <Description />
      </div>
      <div>
        <Projectsection />
      </div>
    </div>
  );
}

export default App;
