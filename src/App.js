import './css/App.css';
import "./css/form.css"
import "./css/button.css"
import NavBar from './components/NavBar';
import Header from './pages/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Service from './pages/Service';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Service/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
