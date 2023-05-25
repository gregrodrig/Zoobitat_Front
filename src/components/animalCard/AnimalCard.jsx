import { Link } from "react-router-dom";
import styles from "./AnimalCard.module.css";
import Card from "react-bootstrap/Card";

const img = "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg";
export function AnimalCard({ animal }) {
  return (
    <>
      <div className={styles.animalFullContainer}>
        <Card className={styles.animalCard}>
          <Card.Body className={styles.animalContainer}>
            <Link to="/animal:1">
              <Card.Img
                variant="top"
                src={img}
                className={styles.animalImage}
              />
              <Card.Title className={styles.animalName}>Test Prueba</Card.Title>
            </Link>
          </Card.Body>
        </Card>
        <Card className={styles.animalCard}>
          <Card.Body className={styles.animalContainer}>
            <Link to="/animal:1">
              <Card.Img
                variant="top"
                src={img}
                className={styles.animalImage}
              />
              <Card.Title className={styles.animalName}>Test Prueba</Card.Title>
            </Link>
          </Card.Body>
        </Card>
        <Card className={styles.animalCard}>
          <Card.Body className={styles.animalContainer}>
            <Link to="/animal:1">
              <Card.Img
                variant="top"
                src={img}
                className={styles.animalImage}
              />
              <Card.Title className={styles.animalName}>Test Prueba</Card.Title>
            </Link>
          </Card.Body>
        </Card>
        <Card className={styles.animalCard}>
          <Card.Body className={styles.animalContainer}>
            <Link to="/animal:1">
              <Card.Img
                variant="top"
                src={img}
                className={styles.animalImage}
              />
              <Card.Title className={styles.animalName}>Test Prueba</Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
    // style={{ width: "18rem" }}
    // <Card className={styles.AnimalCard}>
    //   <Card.Body>
    //     <Link to={`/animal/${animal.idAnimal}`}>
    //       <Card.Img variant="top" src={animal.imagen} />
    //       <Card.Title>{animal.titulo}</Card.Title>
    //     </Link>
    //   </Card.Body>
    // </Card>
  );
}
