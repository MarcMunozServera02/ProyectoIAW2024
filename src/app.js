// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Asegúrate de importar el componente Header
import Footer from './components/Footer';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Newsletter from './pages/Newsletter';
import Contacto from './pages/Contacto';
import ProyectoDetalle from './pages/ProyectoDetalle';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyecto/:id" element={<ProyectoDetalle />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
