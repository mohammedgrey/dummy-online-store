import axios from "axios";

const inProduction = process.env.NODE_ENV === "production";

//TODO: add the domain of the website after deploying it
export const baseURL = inProduction ? "https://dummyonlinestore.herokuapp.com" : "http://localhost:3000";

const instance = axios.create({
  baseURL,
});

export const axiosMain = axios;
export default instance;
