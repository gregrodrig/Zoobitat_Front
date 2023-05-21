import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7106/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
