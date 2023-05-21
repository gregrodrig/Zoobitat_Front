import { Link } from "react-router-dom";
import styles from "./AnimalCard.module.css";

export function AnimalCard({ animal }) {
  return (
    <li className={styles.animalCard}>
      <Link to={`/animal/${animal.idAnimal}`}>
        <img
          width={230}
          height={345}
          className={styles.animalImage}
          src={animal.imagen}
          alt={animal.titulo}
        />
      </Link>
    </li>
  );
}
