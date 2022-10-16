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

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  database: [
    {
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const data2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  pointColor: "#ffffff",
  datasets: [
    {
      id: 1,
      label: "",
      data: [5, 6, 7, 8, 9, 10, 11],
      borderColor: "#928154"
    },
    {
      id: 2,
      label: "",
      data: [3, 2, 1, 0, 1, 2, 3],
      borderColor: "#4b84d2"
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
  tooltips: { backgroundColor: "#fdd100" },
  plugins: {
    legend: {
      display: false
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
    <section className="relative z-0 w-full rounded-md h-2/5 bg-stashaway-blue">
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
        <div className="text-sm font-metropolis text-stashaway-white">
          StashAway Risk Index 14%
        </div>
        <div className="space-y-1 text-sm font-metropolis text-stashaway-white">
          <div>40% VTSMX (Stock) + 60% VBMFX (Bond)</div>
          <div className="opacity-50">
            VTSMX - Vanguard Total Stock Market Index
          </div>
          <div className="opacity-50">
            VTBMX - Vanguard Total Bond Market Index
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graph;
