import axios from "axios";
import { BASE_EMAIL_API } from "./url";

const fetcher = axios.create({
  baseURL: BASE_EMAIL_API,
});

export default fetcher;
