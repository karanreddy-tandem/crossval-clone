import radialimage from "../../../assets/images/dashboard-2/radial-image.png";
import configDB from "../../../data/customizer/config";
const primary =
  "#1FC39E" ||
  localStorage.getItem("default_color") ||
  configDB.data.color.primary_color;
const secondary =
  "#0f5646" ||
  localStorage.getItem("secondary_color") ||
  configDB.data.color.secondary_color;

// Defaut
export const Currentlysale = {
  series: [
    {
      name: "series1",
      data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0],
    },
    {
      name: "series2",
      data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0],
    },
  ],
  options: {
    chart: {
      height: 240,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
      ],
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    markers: {
      strokeWidth: 3,
      colors: "#ffffff",
      strokeColors: [primary, secondary],
      hover: {
        size: 6,
      },
    },
    yaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        bottom: -15,
        top: -40,
      },
    },
    colors: [primary, secondary],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100],
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      x: {
        format: "MM",
      },
    },
  },
};

export const Marketvalue = {
  series: [
    {
      name: "Market value",
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ],
  options: {
    chart: {
      type: "radar",
      toolbar: {
        show: false,
      },
    },

    stroke: {
      width: 3,
      curve: "smooth",
    },
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          fill: {
            colors: ["#fcf8ff", "#f7eeff"],
          },
        },
      },
    },
    colors: [primary],

    markers: {
      size: 6,
      colors: ["#fff"],
      strokeColor: primary,
      strokeWidth: 3,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val;
          } else {
            return "";
          }
        },
      },
    },
  },
};

export const apexBarChart = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [primary],
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  },
};

export const radialChart = {
  series: [70],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
          image: require("../../../assets/images/other-images/success.png"),
          imageWidth: 64,
          imageHeight: 64,
          imageClipped: false,
        },
        dataLabels: {
          name: {
            show: false,
            color: "#fff",
          },
          value: {
            show: true,
            color: "#333",
            offsetY: 70,
            fontSize: "22px",
          },
        },
      },
    },
    fill: {
      // type: "image",
      colors: ["#1FC39E"],
      // image: {
      //   src: [require("../../../assets/images/user-card/5.jpg")],
      // },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Volatility"],
  },
};

export const apexDonutCharts = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: "donut",
    },
    legend: {
      show: false,
    },
    dataLabels: { enabled: false },
    colors: [primary, secondary, "#51bb25", "#544fff", "#fb740d"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
        },
      },
    ],
  },
};

export const radialChartLive = {
  options: {
    chart: {
      width: 450,
      height: 350,
      type: "radialBar",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      offsetY: 0,
      offsetX: 0,
    },
    // legend: {
    //   show: true,
    // },
    colors: [primary, secondary],
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: false,
        hollow: {
          margin: 5,
          size: "48%",
          background: "transparent",
        },
        track: {
          show: true,
          background: "#f2f2f2",
          strokeWidth: "10%",
          opacity: 1,
          margin: 3,
        },
      },
    },
  },
  series: [71, 63],
  labels: ["Device 1", "Device 2"],
};

export const apexMixedCharts = {
  series: [
    {
      name: "Column",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    // {
    //   name: "Area",
    //   type: "area",
    //   data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    // },
    // {
    //   name: "Line",
    //   type: "line",
    //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    // },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    colors: [primary, "#51bb25", secondary],
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  },
};

export const areaSpaline = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    colors: [primary, secondary],
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};

// Ecommerce
export const Monthlysales = {
  series: [
    {
      name: "series1",
      data: [280, 170, 440, 170, 270, 130],
    },
    {
      name: "series2",
      data: [150, 500, 300, 250, 420, 350],
    },
    {
      name: "series3",
      data: [450, 150, 320, 500, 280, 100],
    },
  ],

  options: {
    chart: {
      height: 150,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 0,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
      ],
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: -50,
        bottom: -40,
      },
    },
    fill: {
      type: "gradient",
      opacity: [1, 0.4, 0.25],
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 1,
        gradientToColors: ["#a26cf8", "#a927f9", primary],
        opacityFrom: [1, 0.4, 0.25],
        opacityTo: [1, 0.4, 0.25],
        stops: [30, 100],
        colorStops: [],
      },
      colors: [primary, primary, primary],
    },
    colors: [primary, secondary, secondary],
  },
};
export const columnCharts = {
  series: [
    {
      name: "Inflation",
      data: [2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2],
    },
  ],
  options: {
    chart: {
      height: 105,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top", // top, center, bottom
        },

        columnWidth: "20%",
        startingShape: "rounded",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,

      formatter: function (val) {
        return val + "%";
      },
      offsetY: -10,
      style: {
        fontSize: "12px",
        colors: [primary],
      },
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      position: "bottom",

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#7366ff",
            colorTo: "#c481ec",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    grid: {
      show: false,
      padding: {
        top: -35,
        right: -45,
        bottom: -20,
        left: -10,
      },
    },
    colors: [primary],
  },
};

export const totalearning = {
  series: [
    {
      name: "Daily",
      data: [
        0.4,
        0.5,
        0.6,
        0.7,
        0.8,
        0.9,
        1.1,
        1.15,
        1.2,
        1.25,
        1.3,
        1.35,
        1.4,
        1.45,
        1.5,
        1.55,
        1.5,
        1.45,
        1.4,
        1.35,
        1.3,
        1.25,
        1.2,
        1.15,
        1.1,
        1.05,
        0.9,
        0.85,
        0.8,
        0.75,
        0.7,
        0.65,
        0.6,
        0.55,
        0.5,
        0.45,
        0.4,
        0.35,
      ],
    },
    {
      name: "Weekly",
      data: [
        -0.4,
        -0.5,
        -0.6,
        -0.7,
        -0.8,
        -0.9,
        -1.1,
        -1.15,
        -1.2,
        -1.25,
        -1.3,
        -1.35,
        -1.4,
        -1.45,
        -1.5,
        -1.55,
        -1.5,
        -1.45,
        -1.4,
        -1.35,
        -1.3,
        -1.25,
        -1.2,
        -1.15,
        -1.1,
        -1.05,
        -0.9,
        -0.85,
        -0.8,
        -0.75,
        -0.7,
        -0.65,
        -0.6,
        -0.55,
        -0.5,
        -0.45,
        -0.4,
        -0.35,
      ],
    },
    {
      name: "Monthly",
      data: [
        -1.35,
        -1.45,
        -1.55,
        -1.65,
        -1.75,
        -1.85,
        -1.95,
        -2.15,
        -2.25,
        -2.35,
        -2.45,
        -2.55,
        -2.65,
        -2.75,
        -2.85,
        -2.95,
        -3.0,
        -3.1,
        -3.2,
        -3.25,
        -3.1,
        -3.0,
        -2.95,
        -2.85,
        -2.75,
        -2.65,
        -2.55,
        -2.45,
        -2.35,
        -2.25,
        -2.15,
        -1.95,
        -1.85,
        -1.75,
        -1.65,
        -1.55,
        -1.45,
        -1.35,
      ],
    },
    {
      name: "Yearly",
      data: [
        1.35,
        1.45,
        1.55,
        1.65,
        1.75,
        1.85,
        1.95,
        2.15,
        2.25,
        2.35,
        2.45,
        2.55,
        2.65,
        2.75,
        2.85,
        2.95,
        3.0,
        3.1,
        3.2,
        3.25,
        3.1,
        3.0,
        2.95,
        2.85,
        2.75,
        2.65,
        2.55,
        2.45,
        2.35,
        2.25,
        2.15,
        1.95,
        1.85,
        1.75,
        1.65,
        1.55,
        1.45,
        1.35,
      ],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 320,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: [primary, primary, primary, primary],
    plotOptions: {
      bar: {
        vertical: true,
        columnWidth: "40%",
        barHeight: "80%",
        startingShape: "rounded",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      min: -5,
      max: 5,
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    fill: {
      opacity: [0.8, 0.8, 0.2, 0.2],
      colors: [
        function ({ value, seriesIndex, w }) {
          if (value < 0.75) {
            return "#a26cf8";
          } else {
            return primary;
          }
        },
      ],
    },
  },
};

export const Riskfactorchart = {
  series: [70],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10,
    },

    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        inverseOrder: true,
        hollow: {
          margin: 5,
          size: "60%",
          image: radialimage,
          imageWidth: 140,
          imageHeight: 140,
          imageClipped: false,
        },
        track: {
          opacity: 0.4,
          colors: primary,
        },
        dataLabels: {
          enabled: false,
          enabledOnSeries: undefined,
          formatter: function (val, opts) {
            return val + "%";
          },
          textAnchor: "middle",
          distributed: false,
          offsetX: 0,
          offsetY: 0,

          style: {
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fill: ["#2b2b2b"],
          },
        },
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        gradientToColors: ["#a927f9"],
        type: "horizontal",
      },
    },
    stroke: {
      dashArray: 15,
      strokecolor: ["#ffffff"],
    },

    labels: ["Selling rate"],
    colors: [primary],
  },
};

export const apexRadialBarChart = {
  series: [44, 55, 67, 83],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return 249;
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
    colors: [primary, secondary, "#51bb25", "#544fff"],
  },
};
