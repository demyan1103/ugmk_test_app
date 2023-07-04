import { createContext, useEffect, useState } from "react";
import { getProductsService } from "../../services/productsService";

export const Context = createContext([]);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    getProductsService(controller.signal)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));

    return () => {
      controller.abort();
    };
  }, []);

  return <Context.Provider value={products}>{children}</Context.Provider>;
};
