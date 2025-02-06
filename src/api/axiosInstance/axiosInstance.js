import axios from "axios";
import { baseURL } from "../endPoints/endPoints";



export const axiosInstance = axios.create({
    baseURL
  });