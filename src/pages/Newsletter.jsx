import React from "react";
import "../css/Newsletter.css";
import { Link } from "react-router-dom";

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">Newsletter</h1>

      <section className="newsletter-header">
        <div className="header-text">
          <h1>Mes de Diciembre</h1>
          <h2>Trabajando en un Portafolio!</h2>
        </div>
      </section>

      <div className="newsletter-content">
        <div className="newsletter-info">
          <p>Trabajo Mensual</p>
          <p>Marc Muñoz</p>
          <p>
            Este mes hemos trabajado en un proyecto de portafolio para nuestro
            cliente Antoni Morey Pasqual.
          </p>
          <p>
            Dejamos por aquí un enlace al{" "}
            <Link to="../proyectos">
              {" "}
              <b>proyecto</b>
            </Link>{" "}
            para que lo puedas seguir de cerca.
          </p>
          <p>
            Si quieres registrarte para que te llegen avisos mensuales sobre
            nuestro proyectos ves a la pagina de contacto o presiona abajo en la
            pagina.
          </p>
        </div>
      </div>
    </div>
  );
}
