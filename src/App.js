import './index.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import projects from './arrays/projects'
function App() {
  return (
  <div className="App">
    <Navbar />
    <About />
    <Projects 
      projects={projects[0]}
      projects1={projects[1]}
      projects2={projects[2]}
      projects3={projects[3]}
    />
    <Contact />
  </div>
  );
}

export default App;
