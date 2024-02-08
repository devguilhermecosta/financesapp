import axios from "axios";

const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: baseUrl,
});

export { api, baseUrl };