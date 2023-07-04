import moment from "moment";
import { labels, options } from "../consts";

export const convertToMonths = (array) =>
  array
    .filter((item) => item.date !== null)
    .map((item) => ({
      ...item,
      date: moment(item.date, "D/M/YYYY").format("M"),
    }));

export const filteredByFactoryId = (array, id) =>
  array.filter((item) => item.factory_id === id);

// NOTE: returns an array of objects , with the sum of products by month
export const sumByMonth = (array) => {
  const result = [];

  for (let i = 0; i <= labels.length; i++) {
    result.push(
      array.reduce(
        (accum, item) => {
          if (item.date === (i + 1).toString()) {
            return {
              product1: accum.product1 + item.product1,
              product2: accum.product2 + item.product2,
              product3: accum.product3 + item.product3,
            };
          }
          return accum;
        },
        { product1: 0, product2: 0, product3: 0 }
      )
    );
  }

  return result;
};

// NOTE: returns an object with two arrays, filtered by month and factory, with the sum of products
export const getData = (data, product) => ({
  data1: sumByMonth(filteredByFactoryId(convertToMonths(data), 1)).map((item) =>
    Math.floor(
      (!product
        ? item.product1 + item.product2 + item.product3
        : item[product]) / 1000
    )
  ),
  data2: sumByMonth(filteredByFactoryId(convertToMonths(data), 2)).map((item) =>
    Math.floor(
      (!product
        ? item.product1 + item.product2 + item.product3
        : item[product]) / 1000
    )
  ),
});

export const getBarChartData = (labels, productsData) =>
  labels.map((item, index) => {
    return {
      labels: item,
      data1: productsData.data1[index],
      data2: productsData.data2[index],
    };
  });

export const getArrayProducts = (prod, id, month) => {
  return [
    {
      label: "Продукт 1",
      value: Math.floor(
        sumByMonth(filteredByFactoryId(convertToMonths(prod), +id + 1))[month]
          .product1 / 1000
      ),
    },
    {
      label: "Продукт 2",
      value: Math.floor(
        sumByMonth(filteredByFactoryId(convertToMonths(prod), +id + 1))[month]
          .product2 / 1000
      ),
    },
  ];
};

export const getSelectProductsFromLocalStorage = () =>
  localStorage.getItem("value") ? localStorage.getItem("value") : options[0];
