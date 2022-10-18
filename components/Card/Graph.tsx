import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useState, useRef } from "react";
import { CurrencyRow, TimeRow } from "@components/index";

interface Props {
  props?: HighchartsReact.Props;
  passChildData1: any;
  passChildData2: any;
}

const Graph = (props: Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  // Array for time buttons
  const timeArray = [
    { id: "btn1m", label: "1 month" },
    { id: "btn6m", label: "6 month" },
    { id: "btnYtd", label: "Year-to-date" },
    { id: "btn1yr", label: "1 year" },
    { id: "btn5yr", label: "5 years" },
    { id: "btnMax", label: "Max" }
  ];

  // Array for currency buttons
  const currencyArray = [
    { id: "btnSGD", label: "SGD" },
    { id: "btnUSD", label: "USD" }
  ];

  // States to keep track of which button is selected
  const [timeState, setTimeState] = useState<string | undefined>(
    timeArray[0].id
  );
  const [currencyState, setCurrencyState] = useState<string | undefined>(
    currencyArray[0].id
  );

  // Array for data
  const processedDataA: { x: number; y: number }[] = [];
  const processedDataB: { x: number; y: number }[] = [];
  const dailySwitch = "Time Series (Daily)";

  // Loop the object data and push it to the array - StashAway static JSON
  for (const key in props.passChildData1[dailySwitch]) {
    processedDataA.push({
      x: new Date(key).getTime(),
      y: parseFloat(props.passChildData1[dailySwitch][key]["4. close"])
    });
  }

  // Loop the object data and push it to the array - API JSON
  for (const key in props.passChildData2[dailySwitch]) {
    processedDataB.push({
      x: new Date(key).getTime(),
      y: parseFloat(props.passChildData2[dailySwitch][key]["4. close"])
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
      }
    },
    legend: {
      enabled: false,
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
      valueDecimals: 2,
      backgroundColor: "#ffffff",
      borderColor: "#ffffff",
      xDateFormat: "%d %b %Y",
      dateTimeLabelFormats: {
        day: "%b %e, %Y"
      },
      borderRadius: 20,
      valuePrefix: "$",
      valueSuffix: " SGD",
      useHTML: true,
      headerFormat:
        '<div style="margin: 1.25rem 2rem; color: #0e233e; text-align: right;"><div style="margin-bottom:1rem; font-weight: bold; font-size: 0.875rem;">{point.x:%b %e, %Y}</div>',
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
        load: function () {
          const chart = this,
            xAxis = chart.xAxis[0];

          setTimeout(function () {
            // Zoom for 1 month
            const btn1m = document.getElementById("btn1m");
            btn1m?.addEventListener("click", function () {
              const oneMonth = 2629800000,
                points = chart.series[0].points;
              xAxis.setExtremes(
                points[points.length - 1].x - oneMonth,
                points[points.length - 1].x
              );
            });

            // Zoom for 6 months
            const btn6m = document.getElementById("btn6m");
            btn6m?.addEventListener("click", function () {
              const sixMonths = 6 * 2629800000,
                points = chart.series[0].points;
              xAxis.setExtremes(
                points[points.length - 1].x - sixMonths,
                points[points.length - 1].x
              );
            });

            // Zoom for year-to-date
            const btnYtd = document.getElementById("btnYtd");
            btnYtd?.addEventListener("click", function () {
              const threeMonths = 3 * 2629800000,
                points = chart.series[0].points;
              xAxis.setExtremes(
                points[points.length - 1].x - threeMonths,
                points[points.length - 1].x
              );
            });

            // Zoom for 1 year
            const btn1yr = document.getElementById("btn1yr");
            btn1yr?.addEventListener("click", function () {
              const oneYear = 12 * 2629800000,
                points = chart.series[0].points;
              xAxis.setExtremes(
                points[points.length - 1].x - oneYear,
                points[points.length - 1].x
              );
            });

            // Zoom for 5 years
            const btn5yr = document.getElementById("btn5yr");
            btn5yr?.addEventListener("click", function () {
              const fiveYears = 12 * 5 * 2629800000,
                points = chart.series[0].points;
              xAxis.setExtremes(
                points[points.length - 1].x - fiveYears,
                points[points.length - 1].x
              );
            });

            // Zoom for max
            const btnMax = document.getElementById("btnMax");
            btnMax?.addEventListener("click", function () {
              const oneYear = 12 * 20 * 2629800000,
                points = chart.series[0].points;
              xAxis.setExtremes(
                points[points.length - 1].x - oneYear,
                points[points.length - 1].x
              );
            });
          }, 5000);
        }
      }
    },
    xAxis: {
      minRange: 1,
      type: "datetime",
      labels: {
        format: "{value:%b %y}",
        style: {
          color: "#ffffff"
        }
      },
      crosshair: {
        color: "#62b4b1"
      }
    },
    yAxis: {
      showFirstLabel: false,
      opposite: false,
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
    <>
      <div className="flex w-full pb-4 mx-auto pt-14 max-w-screen-2xl place-content-between">
        <div className="space-x-3">
          <TimeRow timeInput={timeArray} passChildState={setTimeState} />
        </div>
        <div className="space-x-3">
          <CurrencyRow
            currencyInput={currencyArray}
            passChildState={setCurrencyState}
          />
        </div>
      </div>
      <section className="relative z-0 w-full h-auto rounded-2xl bg-stashaway-blue">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          constructorType={"stockChart"}
          ref={chartComponentRef}
          {...props}
        />
        <div className="absolute z-10 space-y-3 top-16 left-16">
          <h1 className="text-2xl font-bold font-metropolis text-stashaway-white">
            Portfolio value based on gross returns
          </h1>
          <p className="font-metropolis text-stashaway-white">
            Gross returns and exchange rates sourced from Bloomberg as of 2th
            May 2019
          </p>
        </div>
        <div className="absolute left-0 right-0 z-10 flex items-start justify-center space-x-48 bottom-14">
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
    </>
  );
};

export default Graph;
