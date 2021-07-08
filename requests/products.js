import axios from "./index";

export const getAllProducts = async () => {
  return (await axios.get("/api/products")).data;
};

export const getProduct = async (id) => {
  return (await axios.get(`/api/products/${id}`)).data;
};
