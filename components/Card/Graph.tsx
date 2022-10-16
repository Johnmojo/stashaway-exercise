import { LineChart } from "@components/index";
import { useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Props {
  UserData: {
    id: number;
    year: number;
    userGain: number;
    userLost: number;
  }[];
}

// Disable K's on numeric label
// Highcharts.setOptions({
//   lang: {
//     numericSymbols: undefined
//   }
// });

// Option config for the Line chart
const options: Highcharts.Options = {
  title: {
    text: undefined
  },
  tooltip: {
    shared: true
  },
  colors: ["#4b84d2", "#928154"],
  chart: {
    type: "line",
    backgroundColor: "#0e233e",
    borderRadius: 20,
    spacingTop: 200,
    spacingBottom: 200,
    spacingLeft: 65,
    spacingRight: 60,
    height: "50%"
  },
  xAxis: {
    labels: {
      style: {
        color: "#ffffff"
      }
    }
  },
  yAxis: {
    title: {
      text: null
    },
    labels: {
      format: "{value:,3f}",
      style: {
        color: "#ffffff"
      }
    },
    gridLineColor: "rgba(255,255,255,0.2)"
  },
  series: [
    {
      name: "StashAway Risk Index 14%",
      type: "line",
      data: [
        43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
        161454, 154610
      ]
    },
    {
      name: "40% VTSMX (Stock) + 60 % VBMFX (Bond)",
      type: "line",
      data: [
        11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213,
        25663
      ]
    }
  ],
  credits: {
    enabled: false
  }
};

const Graph = (props: HighchartsReact.Props) => {
  return (
    <section className="relative z-0 w-full rounded-2xl bg-stashaway-blue">
      <HighchartsReact highcharts={Highcharts} options={options} {...props} />
      <div className="absolute z-10 space-y-3 top-16 left-16">
        <h1 className="text-2xl font-bold font-metropolis text-stashaway-white">
          Portfolio value based on gross returns
        </h1>
        <p className="font-metropolis text-stashaway-white">
          Gross returns and exchange rates sourced from Bloomberg as of 2th May
          2019
        </p>
      </div>
      <div className="absolute left-0 right-0 z-10 flex items-start justify-center space-x-48 bottom-10">
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
