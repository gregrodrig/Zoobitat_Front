import styles from "./Empty.module.css";

export function Empty({ msg }) {
  switch (msg) {
    case "login":
      return (
        <p className={styles.center}>
          No se han cargado los datos desde la Base de datos!
        </p>
      );
    case "animal":
      return <p className={styles.center}>No hay animales para mostrar!</p>;
    default:
      return null;
  }
}
