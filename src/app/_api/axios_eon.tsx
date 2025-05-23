import axios from "axios";

let axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8080",
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response?.status === 403 || error.response?.status === 401) {
//       console.log("go to login");
//       window.location.href = "/";
//     } else if (error.response.status === 400 || error.response.status === 404) {
//       console.log("not-found");
//     } else if (error.response.status === 409) {
//       console.log("bad request conflict 409");
//     } else if (error.response.status === 422) {
//       console.log("bad request 422");
//     } else if (error.response === undefined) {
//       console.log("loading");
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
