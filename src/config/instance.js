import axios from "axios";
import { API_URL } from "./";

export const headerAxios = axios.create({
  baseURL: API_URL,
});