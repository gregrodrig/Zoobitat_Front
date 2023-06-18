import styles from "./Login.module.css";
import "../../index.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

export const Login = () => {
  const navigate = useNavigate();
  const { isLoginLoading, hasLoginError, loginIn } = useUser();

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const token = await loginIn(values.email, values.password);
      if (token) {
        navigate("/Dashboard");
      }
    },
  });
  return (
    <>
      {!isLoginLoading ? (
        <>
          <div className={`${styles.main_container}`}>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className={`${styles.mtop} mb-3`}>
                <h1
                  className={`${styles.header}`}
                  style={{ color: "var(--DarkGreen)" }}
                >
                  ¡Bienvenido!{" "}
                </h1>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="user@mail.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className={`${styles.inputs}`}
                  style={{
                    backgroundColor: "var(--input-color)",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className={`${styles.inputs}`}
                  style={{
                    backgroundColor: "var(--input-color)",
                  }}
                />
              </Form.Group>
              {hasLoginError ? (
                <strong className="mb-3">Credentials are invalid</strong>
              ) : (
                ""
              )}
              <Button
                type="submit"
                size="lg"
                variant="secondary"
                className={`${styles.btnSubmit} disable`}
                style={{
                  backgroundColor: "var(--DarkGreen)",
                }}
              >
                Iniciar Sesión
              </Button>
            </Form>
            <div className={`${styles.register_container}`}>
              <AiFillCheckCircle
                className={`${styles.register_check}`}
                style={{ color: "var(--DarkGreen)" }}
              />
              <span
                className={`${styles.register_recuerdame}`}
                style={{ color: "var(--MediumGreen)" }}
              >
                Recuérdame
              </span>
              <span style={{ color: "var(--MediumGreen)" }}>
                ¿Olvidaste tu contraseña?
              </span>
            </div>
          </div>
          <div
            style={{ color: "#808080", marginTop: "100px", fontSize: "14px" }}
          >
            ¿No tienes cuenta?
            <span style={{ color: "#4F7302" }}>
              <a
                href="/register"
                style={{ color: "#4F7302", marginLeft: "5px" }}
              >
                Regístrate Ahora
              </a>
            </span>
          </div>
        </>
      ) : (
        <strong>Checking credentials...</strong>
      )}
    </>
  );
};
