import { useContext, useEffect, useState } from "react";
import { Context } from "../../components/ProductsContextProvider/ProductsContextProvider";
import { FilterSelector } from "../../components/FilterSelector/FilterSelector";
import { BarChart } from "../../components/BarChart/BarChart";
import {
  getBarChartData,
  getData,
  getSelectProductsFromLocalStorage,
} from "../../helpers/index";
import { labels, options } from "../../consts";
import "./style.scss";

export const MainPage = () => {
  const [value, setValue] = useState(getSelectProductsFromLocalStorage);
  const products = useContext(Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!products) {
      return;
    }

    switch (value) {
      case "Продукт 1":
        setData(getBarChartData(labels, getData(products, "product1")));
        break;
      case "Продукт 2":
        setData(getBarChartData(labels, getData(products, "product2")));
        break;
      default:
        setData(getBarChartData(labels, getData(products)));
        break;
    }

    localStorage.setItem("value", value);
  }, [value, products]);

  return (
    <div className="wrapper-page">
      <FilterSelector
        title="Фильтр по типу продукции"
        options={options}
        value={value}
        setValue={setValue}
      />

      <BarChart productsData={data} />
    </div>
  );
};
