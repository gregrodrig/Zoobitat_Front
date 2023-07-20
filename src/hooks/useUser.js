import { useCallback, useContext, useState } from "react";
import { Context } from "../App";

import axiosInstance, { setAuthorization } from "utils/api/CallApi";
import axios from "axios";
import miVariableGlobal from "../global.js";

export default function useUser() {
  const { jwt, setJwt, rol, setRol } = useContext(Context);

  const [isLoading, setLoading] = useState({ loading: false, error: false });

  const loginIn = async (email, contrasenna) => {
    try {
      const response = await axiosInstance.post("LogIn/Login", {
        email,
        contrasenna,
      });
      setJwt(response.data);
      window.sessionStorage.setItem("token", response.data);
      setLoading({ loading: false, error: false });
      setAuthorization();
      return response.data;
    } catch (err) {
      if (sessionStorage.getItem("token")) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${sessionStorage.getItem("token")}`;
      }
      axios
        .post(`${miVariableGlobal}logs`, {
          message: err.response.data,
          level: "ERROR",
          section: "lOGIN",
          IdUsuario: 4,
          Usuario: null,
        })
        .then((response) => {
          console.log("Log enviado al servidor");
        })
        .catch((error) => {
          console.error("Error al enviar el log al servidor", error);
        });
      console.log(err.response.data);
      setLoading({ loading: false, error: true });
    }
  };

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("token");
    setAuthorization();
    setJwt(null);
    setRol(null);
  }, [setJwt, setRol]);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: isLoading.loading,
    hasLoginError: isLoading.error,
    logout,
    loginIn,
    rol,
    setRol,
  };
}
