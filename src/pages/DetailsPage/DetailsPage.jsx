import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../components/ProductsContextProvider/ProductsContextProvider";
import { PieChart } from "../../components/PieChart/PieChart";
import { getArrayProducts } from "../../helpers/index";
import { labels } from "../../consts";
import "./style.scss";

export const DetailsPage = () => {
  const [data, setData] = useState([]);
  const products = useContext(Context);
  const { factoryId, monthNumber } = useParams();

  useEffect(() => {
    if (!products) {
      return;
    }
    setData(
      getArrayProducts(products, `${+factoryId - 1}`, `${+monthNumber - 1}`)
    );
  }, [products]);

  return (
    <div className="wrapper-details">
      <h1 className="wrapper-details-title">
        {`Статистика по продукции фабрики ${factoryId === "1" ? "А" : "Б"} за ${
          labels[+monthNumber - 1]
        }`}
      </h1>

      <div className="wrapper-details-chart">
        <PieChart arrayOfProductsCount={data} />
      </div>
    </div>
  );
};
