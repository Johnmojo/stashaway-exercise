import { LineChart } from "@components/index";
import { useState } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Props {
  UserData: {
    id: number;
    year: number;
    userGain: number;
    userLost: number;
  }[];
}

const data2 = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  datasets: [
    {
      id: 1,
      pointColor: "#0e233e",
      backgroundColor: "#0e233e",
      borderColor: "#928154",
      label: "40% VTSMX (Stock) + 60% VBMFX (Bond)",
      data: [
        10000, 20000, 30000, 40000, 50000, 6000, 70000, 80000, 90000, 100000,
        110000, 120000
      ]
    },
    {
      id: 2,
      pointColor: "#928154",
      backgroundColor: "#928154",
      borderColor: "#4b84d2",
      label: "StashAway Risk Index 14%",
      data: [
        20000, 40000, 20000, 45000, 60000, 70000, 50000, 88000, 100000, 120000,
        110000, 130000
      ]
    }
  ]
};

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false
  },
  layout: {
    padding: {
      left: 60,
      right: 60,
      top: 200,
      bottom: 150
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      backgroundColor: "#ffffff",
      displayColors: true,
      cornerRadius: 6,
      bodyFontColor: "#0e233e",
      footerFontColor: "#0e233e",
      titleAlign: "right",
      titleColor: "#0e233e",
      bodyColor: "#0e233e",
      bodyAlign: "right",
      footerAlign: "right",
      padding: 20,
      caretSize: 0,
      titleFontStyle: "bold",
      callbacks: {
        label: function (context) {
          let label1 = context.dataset.label || "";
          let label2 = context.parsed.y || "";
          return [label1, label2];
        }
        // labelTextColor: function (context) {
        //   return "#543453";
        // }
      }
    }
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 3
    },
    points: {
      radius: 0,
      hitRadius: 0
    }
  },
  scales: {
    y: {
      display: true,
      grid: {
        display: true,
        color: "rgba(255,255,255,0.5)",
        borderWidth: 0,
        lineWidth: 1.5
      },
      ticks: {
        padding: 20,
        color: "#ffffff"
      }
    },
    x: {
      display: true,
      grid: {
        display: false
      },
      ticks: {
        color: "#ffffff"
      }
    }
  }
};

const Graph = () => {
  return (
    <section className="relative z-0 w-full rounded-2xl h-2/5 bg-stashaway-blue">
      <Line datasetIdKey="id" data={data2} options={options} />
      <div className="absolute space-y-3 top-16 left-16">
        <h1 className="text-2xl font-bold font-metropolis text-stashaway-white">
          Portfolio value based on gross returns
        </h1>
        <p className="font-metropolis text-stashaway-white">
          Gross returns and exchange rates sourced from Bloomberg as of 2th May
          2019
        </p>
      </div>
      <div className="absolute left-0 right-0 flex items-start justify-center space-x-48 bottom-10">
        <div className="flex items-start">
          <div className="w-5 mt-2 mr-2 h-[0.20rem] bg-stashaway-lightBlue"></div>
          <div className="text-sm font-metropolis text-stashaway-white">
            StashAway Risk Index 14%
          </div>
        </div>
        <div className="flex items-start text-sm font-metropolis text-stashaway-white">
          <div className="w-5 mt-2 mr-2 h-[0.20rem] bg-stashaway-yellow"></div>
          <div className="space-y-1">
            <div>40% VTSMX (Stock) + 60% VBMFX (Bond)</div>
            <div className="opacity-50">
              VTSMX - Vanguard Total Stock Market Index
            </div>
            <div className="opacity-50">
              VTBMX - Vanguard Total Bond Market Index
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graph;
