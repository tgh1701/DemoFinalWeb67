import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = (token) => {
  const request = axios.create({
    baseURL: BASE_URL,
    headers: {
      token: `Bearer ${token}`,
    },
  });
  return request;
};
