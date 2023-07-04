export const options = [
  { name: "Все продукты", id: 0 },
  { name: "Продукт 1", id: 1 },
  { name: "Продукт 2", id: 2 },
];

export const labels = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];

export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: { size: 24 },
      },
    },
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        font: {
          size: 24,
        },
      },
    },
    y: {
      grid: {
        drawOnChartArea: false,
      },
      min: 0,
      max: 600,
      ticks: {
        stepSize: 150,
        font: {
          size: 24,
        },
      },
    },
  },
};

export const pieChartColors = ["#008001", "#FEA500"];
