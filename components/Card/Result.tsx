import useFetch from "@hooks/useFetch";
import { Compare, Graph, CurrencyRow, TimeRow } from "@components/index";
import { useState } from "react";
import vtsmx from "data/vtsmx.json";

const Result = () => {
  // API creds
  const rangeDayAPI = "TIME_SERIES_DAILY";

  // Array for time buttons
  const timeArray = [
    { id: "1m", label: "1 month" },
    { id: "6m", label: "6 month" },
    { id: "ytd", label: "Year-to-date" },
    { id: "1y", label: "1 year" },
    { id: "5y", label: "5 years" },
    { id: "max", label: "Max" }
  ];

  // Array for currency buttons
  const currencyArray = [
    { id: "sgd", label: "SGD" },
    { id: "usd", label: "USD" }
  ];

  // Array for benchmark buttons
  const benchmarkArray = [
    // IBM
    { value: "IBM", label: "40% VTSMX (Stock) + 60% VBMFX (Bond)" },
    // TESCP LONDON
    { value: "TSCO.LON", label: "VTSMX - Vanguard Total Stock Market Index" },
    // Trio-Tech International
    { value: "SHOP.TRT", label: "VTBMX - Vanguard Total Bond Market Index" }
  ];

  // Parent state to keep track of all the child states
  const [benchmarkState, setBenchmarkState] = useState<string | undefined>(
    benchmarkArray[0].value
  );
  const [timeState, setTimeState] = useState<string | undefined>(
    timeArray[0].id
  );
  const [currencyState, setCurrencyState] = useState<string | undefined>(
    currencyArray[0].id
  );

  // Import a custom hook to fetch data
  const { data } = useFetch(
    `https://www.alphavantage.co/query?function=${rangeDayAPI}&symbol=${benchmarkState}&outputsize=full&apikey=demo`
  );

  return (
    <section>
      <div>
        <Compare
          compareInput={benchmarkArray}
          passChildState={setBenchmarkState}
        />
      </div>
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
      <div>
        <Graph passChildData1={data} passChildData2={vtsmx} />
      </div>
    </section>
  );
};

export default Result;
