import "./AnimalListCard.css";
import { Link } from "react-router-dom";
const imgCover = "https://picsum.photos/930/590?random=2";

export default function AnimalListCard({ animal }) {
  const urlAPI = "https://picsum.photos/930/590?random=1";
  return (
    <li className="animalCard">
      <Link to={"/animal/" + animal.idAnimal}>
        <img
          width={230}
          height={345}
          className="animalImage"
          src={!animal.imagen ? imgCover : urlAPI + animal.imagen}
          alt={animal.nombre}
        />
        <div className="animalNombre">{animal.nombre}</div>
      </Link>
    </li>
  );
}
