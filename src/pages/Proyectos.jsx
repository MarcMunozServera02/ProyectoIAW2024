import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Proyectos.css";

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    fetch("/data/proyectos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al cargar JSON: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProyectos(data))
      .catch((error) => console.error("Error al cargar proyectos:", error));
  }, []);

  return (
    <div className="proyectos-container">
      <h1>Mis proyectos</h1>
      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <div className="proyecto-card" key={proyecto.id}>
            <Link to={`/proyecto/${proyecto.id}`}>
              <div className="proyecto-card-header">
                <h2>{proyecto.nombre}</h2>
              </div>

              <img
                className="proyecto-card-img"
                src={`../${proyecto.imagen}`}
                alt={proyecto.nombre}
              />
            </Link>
            <p className="proyecto-card-desc">{proyecto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
