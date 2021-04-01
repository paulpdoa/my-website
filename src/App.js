import './index.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {


  return (
  <div className="App">
    <Navbar />
    <About />
    <Projects 
      project="Project1"
      project2="Project2"
      project3="Project3"
      project4="Project4"
    />
    <Contact />
  </div>
  );
}

export default App;
