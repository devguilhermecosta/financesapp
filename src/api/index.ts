import axios from "axios";

const baseUrl = 'https://short-coats-invite.loca.lt'

const api = axios.create({
  baseURL: baseUrl,
});

export { api, baseUrl };