import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGJmMGEwN2EzYTRkOGIwMzE3YjUwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjkxMzA0OCwiZXhwIjoxNjg5NTA1MDQ4fQ.qk7LtAMXaecTgDjH5yr-70Mz0RjagsnLtWQ26KBpElw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token: `Bearer ${TOKEN}`},
});

// export const userRequest = (token) => {
//   const request = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//       token: `Bearer ${token}`,
//     },
//   });
//   return request;
// };
