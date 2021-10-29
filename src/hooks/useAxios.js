import { useEffect } from "react";
import axios from "axios";
export const useAxios = ({ setFetchStatus, setItems }) => {
  return useEffect(() => {
    async function getProducts() {
      let response;
      try {
        setFetchStatus("loading");
        response = await axios.get("/api/products");
        setItems(response.data.products);
        setFetchStatus("none");
      } catch (err) {
        console.log(err);
        setFetchStatus("error");
      }
    }
    getProducts();
  }, []);
};
//What is the meaning of below warning? Why does it come?
/*React Hook useEffect has missing dependencies: 'setItems' and 'setFetchStatus'. Either include them or remove the dependency array. If 'setFetchStatus' changes too often, find the parent component that defines it and wrap that definition in useCallback. (react-hooks/exhaustive-deps) */
