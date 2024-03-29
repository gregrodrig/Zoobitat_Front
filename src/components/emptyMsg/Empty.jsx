import styles from "./Empty.module.css";

export function Empty({ msg }) {
  switch (msg) {
    case "login":
      return (
        <p className={styles.center}>
          No se han cargado los datos desde la Base de datos!
        </p>
      );
    case "msgDatosNoCargados":
      return (
        <div className={styles.msgNot}>
          <span className={styles.center}>
            <strong>¡ERROR!</strong>
            <br /> No se han cargado los datos desde la Base de datos!...
          </span>
        </div>
      );
    case "msgCargandoDatos":
      return (
        <div className={styles.msgOk}>
          <span className={styles.center}>
            <strong>¡FENOMENAL!</strong>
            <br />
            Estamos cargando los datos...
          </span>
        </div>
      );
    case "msgGuardado":
      return (
        <div className={styles.msgOk}>
          <span className={styles.center}>
            <strong>¡FENOMENAL!</strong>
            <br />
            Datos guradados con éxito...
          </span>
        </div>
      );
    case "msgNoGuardado":
      return (
        <div className={styles.msgNot}>
          <span className={styles.center}>
            <strong>¡ERROR!</strong>
            <br /> Su solicitud no ha podido ser enviada. Algo te falta aún...
          </span>
        </div>
      );
    case "msgOk":
      return (
        <div className={styles.msgOk}>
          <span className={styles.center}>
            <strong>¡FENOMENAL!</strong>
            <br />
            Mensaje enviado con éxito...
          </span>
        </div>
      );
    case "msgOkRegister":
      return (
        <div className={styles.msgOk}>
          <span className={styles.center}>
            <strong>¡FENOMENAL!</strong>
            <br />
            Se registró exitosamente. Espere a ser confirmado por un
            administrador...
          </span>
        </div>
      );
    case "msgNotRegister":
      return (
        <div className={styles.msgNot}>
          <span className={styles.center}>
            <strong>¡ERROR!</strong>
            <br /> No se pudo crear el usuario. Verifique la información
            proporcionada...
          </span>
        </div>
      );
    case "msgNot":
      return (
        <div className={styles.msgNot}>
          <span className={styles.center}>
            <strong>¡ERROR!</strong>
            <br /> Al enviar el mensaje. Inténtalo más tarde...
          </span>
        </div>
      );
    case "msgError":
      return (
        <div className={styles.msgNot}>
          <span className={styles.center}>
            <strong>¡ERROR!</strong>
            <br /> Su solicitud no ha podido ser enviada. Inténtalo más tarde...
          </span>
        </div>
      );
    default:
      return null;
  }
}
