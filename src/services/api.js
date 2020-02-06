import axios from "axios";

const api = axios.create({
  baseURL: "http://179.152.243.3:3333"
});

export default api;
