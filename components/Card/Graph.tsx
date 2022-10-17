import { LineChart } from "@components/index";
import { useRef, useState } from "react";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

// Mock data
import IBM from "../../data/ibm.json";
import VTSMX from "../../data/vtsmx.json";

interface ExtendedChart extends Highcharts.Chart {
  currentZoom: string | undefined;
}
interface Props {
  props?: HighchartsReact.Props;
  passChildData: Object | null;
}

const Graph = (props: Props) => {
  let processedDataA: { x: number; y: number }[] = [];
  let processedDataB: { x: number; y: number }[] = [];

  // TODO: Make this component & cleanup
  const dailySwitch: string = "Time Series (Daily)";

  // console.log(props.passChildData);

  // Loop the object data and push it to the array
  for (const key in props.passChildData[dailySwitch]) {
    processedDataA.push({
      x: new Date(key).getTime(),
      y: parseFloat(props.passChildData[dailySwitch][key]["4. close"])
    });
  }

  for (const key in props.passChildData[dailySwitch]) {
    processedDataB.push({
      x: new Date(key).getTime(),
      y: parseFloat(props.passChildData[dailySwitch][key]["4. close"])
    });
  }

  // Additional global settings for Nextjs
  if (typeof Highcharts === "object") {
    Highcharts.setOptions({
      lang: {
        thousandsSep: ","
      }
    });
  }

  // Option config for the Line chart
  const options: Highcharts.Options = {
    title: {
      text: undefined
    },
    navigator: {
      enabled: false
    },
    scrollbar: {
      enabled: false
    },
    rangeSelector: {
      enabled: false,
      selected: 1,
      inputEnabled: false,
      buttonTheme: {
        visibility: "hidden"
      },
      labelStyle: {
        visibility: "hidden"
      },
      buttons: [
        {
          type: "month",
          count: 1,
          text: "1m",
          title: "View 1 month"
        },
        {
          type: "month",
          count: 6,
          text: "6m",
          title: "View 6 months"
        },
        {
          type: "ytd",
          text: "YTD",
          title: "View year to date"
        },
        {
          type: "year",
          count: 1,
          text: "1y",
          title: "View 1 year"
        },
        {
          type: "year",
          count: 5,
          text: "5y",
          title: "View 5 years"
        },
        {
          type: "all",
          text: "Max",
          title: "View all"
        }
      ]
    },
    legend: {
      itemStyle: {
        color: "#ffffff"
      }
    },
    plotOptions: {
      series: {
        turboThreshold: 0,
        states: {
          hover: {
            enabled: false
          }
        },
        marker: {
          enabled: false
        }
      }
    },
    tooltip: {
      shared: true,
      split: false,
      backgroundColor: "#ffffff",
      borderColor: "#ffffff",
      borderRadius: 20,
      xDateFormat: "%d %b %Y",
      valuePrefix: "$",
      valueSuffix: " SGD",
      useHTML: true,
      headerFormat:
        '<div style="margin: 1.25rem 2rem; color: #0e233e; text-align: right;"><div style="margin-bottom:1rem; font-weight: bold; font-size: 0.875rem;">{point.key}</div>',
      pointFormat:
        '<div style="color:#828282; margin-bottom:1rem; font-size: 0.875rem; font-weight: semibold;"><span style="display: inline-block; height: 10px; width: 10px; margin-right: 10px; background-color: {series.color}"></span>{point.series.name}<div style="font-weight:bold; font-size:1.125rem; color:#3884d8">{point.y}</div></div>',
      footerFormat: "</div>"
    },
    colors: ["#3884d8", "#efbe55"],
    chart: {
      type: "line",
      backgroundColor: "#0e233e",
      borderRadius: 20,
      spacingTop: 200,
      spacingBottom: 200,
      spacingLeft: 65,
      spacingRight: 60,
      height: "50%",
      events: {
        load() {
          const chart = this,
            xAxis = chart.xAxis[0];

          m1.addEventListener("click", function () {
            const oneMonth = 2629800000,
              points = chart.series[0].points;
            console.log(points);
            xAxis.setExtremes(
              points[points.length - 1].x - oneMonth,
              points[points.length - 1].x
            );
          });

          m3.addEventListener("click", function () {
            const threeMonths = 3 * 2629800000,
              points = chart.series[0].points;
            xAxis.setExtremes(
              points[points.length - 1].x - threeMonths,
              points[points.length - 1].x
            );
          });

          m6.addEventListener("click", function () {
            const sixMonths = 6 * 2629800000,
              points = chart.series[0].points;
            xAxis.setExtremes(
              points[points.length - 1].x - sixMonths,
              points[points.length - 1].x
            );
          });

          all.addEventListener("click", function () {
            const oneYear: number = 12 * 2629800000,
              points = chart.series[0].points;
            xAxis.setExtremes(
              points[points.length - 1].x - oneYear,
              points[points.length - 1].x
            );
          });
        }
      }
    },
    xAxis: {
      minRange: 1,
      type: "datetime",
      labels: {
        format: "{value:%b %y}",
        // format: "{value:%Y-%b-%e}",
        style: {
          color: "#ffffff"
        }
      },
      crosshair: {
        color: "#62b4b1"
      }
    },
    yAxis: {
      opposite: false,
      showFirstLabel: false,
      title: {
        text: null
      },
      labels: {
        format: "{value:,3f}",
        style: {
          color: "#ffffff"
        }
      },
      gridLineColor: "rgba(255,255,255,0.2)",
      crosshair: false
    },
    series: [
      {
        name: "StashAway Risk Index 14%",
        type: "line",
        data: processedDataA.reverse()
      },
      {
        name: "40% VTSMX (Stock) + 60 % VBMFX (Bond)",
        type: "line",
        data: processedDataB.reverse()
      }
    ],
    credits: {
      enabled: false
    }
  };

  return (
    <section className="relative z-0 w-full h-auto rounded-2xl bg-stashaway-blue">
      <div className="space-x-2">
        <button id="m1">1m</button>
        <button id="m3">3m</button>
        <button id="m6">6m</button>
        <button id="all">All</button>
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
        {...props}
      />
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
