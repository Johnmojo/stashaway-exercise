import useFetch from "@hooks/useFetch";
const API_KEY = process.env.API_KEY;
import { Compare, Graph, CurrencyRow, TimeRow } from "@components/index";
import { useState } from "react";

const Result = () => {
  const rangeDayAPI = "TIME_SERIES_DAILY";
  const rangeWeekAPI = "TIME_SERIES_WEEKLY";
  const rangeMonthAPI = "TIME_SERIES_MONTHLY";

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
    { value: "brka", label: "40% VTSMX (Stock) + 60% VBMFX (Bond)" },
    { value: "ldsvf", label: "VTSMX - Vanguard Total Stock Market Index" },
    { value: "ibm", label: "VTBMX - Vanguard Total Bond Market Index" }
  ];

  // Parent state to keep track of all the child states
  const [benchmarkState, setBenchmarkState] = useState<string | undefined>(
    "mix"
  );
  const [timeState, setTimeState] = useState<string | undefined>("1m");
  const [currencyState, setCurrencyState] = useState<string | undefined>("sgd");

  const [lolState, setLolState] = useState<string | undefined>("mix");

  // List of endpoints
  // const endpoint = `https://www.alphavantage.co/query?function=${rangeDayAPI}&symbol=${UserData.symbol}&apikey=${API_KEY}`;
  const currentEndpoint: string = `http://localhost:4000/brka`;

  // Import a custom hook to fetch data
  const { loading, error, data } = useFetch(currentEndpoint);

  // Verify if its working
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

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
        <Graph passChildData={data} />
      </div>
    </section>
  );
};

export default Result;
