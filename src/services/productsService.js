import axios from "axios";

export const getProductsService = async (signal) =>
  await axios.get(`${process.env.REACT_APP_API}/products`, { signal: signal });
