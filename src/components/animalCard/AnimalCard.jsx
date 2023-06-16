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
            <Link to="/AnimalList">
              <Card.Img
                variant="top"
                src="assets/Animals.png"
                className={styles.animalImage}
              />
             <Card.Title
          className={styles.animalName}
          style={{
            position: "absolute",
            bottom: "7px",
            left: "0",
            color:'white',
            marginBottom:'10px'
          }}
        >
          Animals
        </Card.Title>
            </Link>
          </Card.Body>
        </Card>
        <Card className={styles.animalCard}>
          <Card.Body className={styles.animalContainer}>
            <Link to="/Actividades">
              <Card.Img
                variant="top"
                src="assets/Actividades.png"
                className={styles.animalImage}
              />
  <Card.Title
          className={styles.animalName}
          style={{
            position: "absolute",
            bottom: "7px",
            left: "0",
            color:'white',
            marginBottom:'10px'
          }}
        >
          Actividades
        </Card.Title>            </Link>
          </Card.Body>
        </Card>
        <Card className={styles.animalCard}>
          <Card.Body className={styles.animalContainer}>
            <Link to="/habitat">
              <Card.Img
                variant="top"
                src="assets/habitat.png"
                className={styles.animalImage}
              />
  <Card.Title
          className={styles.animalName}
          style={{
            position: "absolute",
            bottom: "7px",
            left: "0",
            color:'white',
            marginBottom:'10px'
          }}
        >
          Habitat
        </Card.Title>            </Link>
          </Card.Body>
        </Card>
        <Card className={styles.animalCard}>
          <Card.Body className={styles.animalContainer}>
            <Link to="/mapa">
              <Card.Img
                variant="top"
                src="assets/mapa.png"
                className={styles.animalImage}
              />
  <Card.Title
          className={styles.animalName}
          style={{
            position: "absolute",
            bottom: "7px",
            left: "0",
            color:'white',
            marginBottom:'10px'
          }}
        >
          Mapa
        </Card.Title>            </Link>
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
