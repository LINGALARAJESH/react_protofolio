import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Protofolio from "./Components/Protofolio/Protofolio";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills"
import Education from "./Components/Education/Education"
import Projects from  "./Components/Projects/Projects"
import './App.css';
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Protofolio/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
