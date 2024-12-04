// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="pie">
        <h1 className="titulopie">Tienes un proyecto que quieras hacer?</h1>
        <Link to="/contacto"><button className="boton2"> Contactame!</button></Link>

      </div>
    </footer>
  );
};

export default Footer;
