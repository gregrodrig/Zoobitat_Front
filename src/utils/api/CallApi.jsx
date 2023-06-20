import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7106/api/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export const setAuthorization = () => {
  const accessToken = window.sessionStorage.getItem("token");
  console.log(accessToken);
  if (accessToken)
    axiosInstance.defaults.headers.common["Authorization"] =
      "Bearer " + accessToken;
  else delete axiosInstance.defaults.headers.common["Authorization"];
};

setAuthorization();

export default axiosInstance;
