import axios from "axios";

const api = axios.create({
  baseURL: "https://giddy-gray-hen.cyclic.app/api",
});
export default api;
  