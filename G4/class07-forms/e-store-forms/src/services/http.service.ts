import axios from "axios";

export const httpService = axios.create({
  baseURL: "http://localhost:3000/api",
});
