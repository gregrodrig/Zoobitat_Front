import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7106/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const setAuthorization = () => {
  const accessToken = window.sessionStorage.getItem("token");
  if (accessToken)
    axios.defaults.headers.common["Authorization"] = "bearer " + accessToken;
  else delete axios.defaults.headers.common["Authorization"];
};

setAuthorization();

export default axiosInstance;
