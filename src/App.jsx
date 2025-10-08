import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Certificates />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
