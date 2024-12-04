import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/ProyectoDetalle.css";

export default function ProyectoDetalle() {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/proyectos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al cargar JSON: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const proyectoEncontrado = data.find((p) => p.id === parseInt(id, 10));
        if (proyectoEncontrado) {
          setProyecto(proyectoEncontrado);
        } else {
          setError("Proyecto no encontrado.");
        }
      })
      .catch((err) => {
        console.error("Error al cargar el JSON:", err);
        setError("No se pudo cargar el proyecto.");
      });
  }, [id]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!proyecto) {
    return <p className="loading">Cargando...</p>;
  }

  return (
    <div className="proyecto-detalle-container">
      <h1 className="proyecto-detalle-titulo">{proyecto.nombre}</h1>
      <img
        className="proyecto-detalle-imagen"
        src={`../${proyecto.imagen}`}
        alt={proyecto.nombre}
      />
      <p className="proyecto-detalle-descripcion">{proyecto.descripcion}</p>
      <p className="proyecto-detalle-desc-larga">{proyecto.desc_larga}</p>
      {proyecto.github && (
        <p>
          Y si quieres ver el proyecto más a fondo, haz clic{" "}
          <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
            <b>aquí</b>
          </a>{" "}
          para ver el GitHub.
        </p>
      )}
    </div>
  );
}
