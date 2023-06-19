import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGJmMGEwN2EzYTRkOGIwMzE3YjUwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzE3MjY2NiwiZXhwIjoxNjg5NzY0NjY2fQ.Sk_cl_yrDdksMYciyrCNkKYM0qRdtqPKx0bosqs_2_Y";

console.log(TOKEN);
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
