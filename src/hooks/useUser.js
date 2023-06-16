import { useCallback, useContext, useEffect, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../utils/services/login";
import axiosInstance from "utils/api/CallApi";

export default function useUser() {
  const a = useContext(Context);
  console.log(typeof a.setJwt);
  const { jwt, setJwt } = useContext(Context);
  const token = window.sessionStorage.getItem("token");
  a.setJwt?.(token);
  // console.log(jwt);

  const [isLoading, setLoading] = useState({ loading: false, error: false });
  // useEffect(() => {
  //   const token = window.sessionStorage.getItem("token");
  //   if (token) setJwt("token");
  // }, [setJwt]);

  const loginIn = async (email, contrasenna) => {
    try {
      const response = await axiosInstance.post("LogIn/Login", {
        email,
        contrasenna,
      });
      setJwt(response.data);
      window.sessionStorage.setItem("token", response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const login = useCallback(
    (email, contrasenna) => {
      loginService(email, contrasenna)
        .then((jwt) => {
          setLoading({ loading: false, error: false });
          // window.sessionStorage.setItem("token", jwt);
          // setJwt(jwt);
        })
        .catch((err) => {
          setLoading({ loading: false, error: true });
          window.sessionStorage.removeItem("token");
          console.error(err);
        });
    },
    [setJwt]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("token");
    setJwt(null);
  }, [setJwt]);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: isLoading.loading,
    hasLoginError: isLoading.error,
    login,
    logout,
    loginIn,
  };
}
