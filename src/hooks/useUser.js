import { useCallback, useContext, useState } from "react";
import { Context } from "../App";
import axiosInstance, { setAuthorization } from "utils/api/CallApi";

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
