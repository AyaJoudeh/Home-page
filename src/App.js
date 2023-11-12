import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './components/Introduction/Introduction';
import Services from './components/Services/Services';
import Expertise from './components/Expertise/Expertise';
import Contact from './components/Contact/Contact';
import News from './components/News/News';
import Branches from './components/Branches/Branches';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container fluid className="App p-0">
     <Layout />
     <Introduction />
     <Services />
     <Expertise />
     <Contact />
     <News />
     <Branches />
     <Footer />
  </Container>
  );
}

export default App;
