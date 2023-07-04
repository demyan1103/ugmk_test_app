import { Route, Routes } from "react-router-dom";
import { ProductsContextProvider } from "./components/ProductsContextProvider/ProductsContextProvider";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import "./style.scss";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route
          path="details/:factoryId/:monthNumber"
          element={<DetailsPage />}
        />
      </Routes>
    </ProductsContextProvider>
  );
};

export default App;
