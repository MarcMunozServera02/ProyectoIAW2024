import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";
import imagen1 from "./imagen1.png";

export default function Home() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch("/data/servicios.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el archivo JSON");
        }
        return response.json();
      })
      .then((data) => setServicios(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <section className="menu2">
        <div className="text-container">
          <h1>Yo soy Marc</h1>
          <h2>Profesional de diseño web</h2>
          <div className="botones">
            <Link to="/proyectos">
              <button className="boton3">Ver mis proyectos</button>
            </Link>
          </div>
          <img className="imagens" src={imagen1} alt="Imagen Pibe" />
        </div>
      </section>

      <div className="about-container">
        <div className="about-text">
          <p>Sobre mi</p>
          <p>Diseñador</p>
          <p>
            Hola, mi nombre es Marc. Soy Designer. Si tienes algún Proyecto. Lo
            hago lo antes posible. Te gustará mucho mi trabajo, si no lo hace lo
            cambio hasta que te guste.
          </p>
          <p>
            Soy diseñador. Si tienes algún proyecto para tu negocio contacta
            conmigo. Realizo tu proyecto lo antes posible.
          </p>
        </div>
      </div>

      <section id="services">
        <div className="s-heading">
          <h1>Servicios</h1>
        </div>

        <div className="service-cards-container">
          <div className="b-container">
            {servicios.map((servicio) => (
              <div key={servicio.id} className="s-box">
                <div className="s-b-img">
                  <div className="s-type">{servicio.nombre}</div>
                  <img src={servicio.imagen} alt={servicio.nombre} />
                </div>
                <div className="s-b-text">
                  <p>
                    <a href="#">{servicio.descripcion}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
