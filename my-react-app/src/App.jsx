
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/aula10/Home';
import About from './components/aula10/About';
import Contact from './components/aula10/Contact';
import Navbar from './components/aula10/Navbar';
import Navbar2 from './components/aula10/Navbar2';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
          