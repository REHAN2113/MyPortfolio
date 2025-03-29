import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Projects } from './components/Projects/Projects';
import { ContactMe } from './components/ContactMe/ContactMe';
function App() {
  return (
  <div id='app'>
    <NavBar></NavBar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <ContactMe></ContactMe>
  </div>
  );
}

export default App;
