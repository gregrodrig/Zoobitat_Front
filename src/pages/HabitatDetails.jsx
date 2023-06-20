import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HabitatDetails.css";
import axios from "axios";

function HabitatDetails() {
  const { idhabitat } = useParams();
  const [habitat, setHabitat] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET utilizando el valor de idhabitat
    axios
      .get(`https://localhost:7106/api/habitat/${idhabitat}`)
      .then((response) => {
        setHabitat(response.data);
        // Manejar la respuesta de la solicitud
        console.log(idhabitat);
      })
      .catch((error) => {
        // Manejar el error de la solicitud
        console.error(error);
      });
  }, [idhabitat]);

  return (
    <body>
      <header className="AD-header">
        {/* una map para sacar la background image */}

        <div className="animal-header" key={habitat.idHabitat}>
          <div className="header-container">
            <div className="header-image">
              <img
                src={habitat.imagen}
                alt="back-img"
                style={{ height: "210px" }}
              />
            </div>
          </div>
        </div>
      </header>
      {/* una map para sacar el titulo , la descripcion y la image */}
      <div className="habitats">
        <div className="habitat-details">
          <h2 className="habitat" style={{ fontWeight: "bold" }}>
            {habitat.nombre}
          </h2>
          <hr
            style={{
              margin: "10px ",
              borderWidth: "2px",
              width: "80%",
              marginLeft: "36px",
              color: "black",
            }}
          />

          <p
            style={{
              textAlign: "start",
              marginLeft: "20px",
              fontSize: "12px",
              width: "100%",
              marginTop: "20px",
            }}
          >
            {habitat.descripcion}
          </p>
        </div>
      </div>
    </body>
  );
}
export default HabitatDetails;
