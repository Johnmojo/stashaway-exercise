import useFetch from "@hooks/useFetch";
import { Compare, Graph } from "@components/index";
import { useState } from "react";
import vtsmx from "data/vtsmx.json";

const Result = () => {
  // API creds
  const rangeDayAPI = "TIME_SERIES_DAILY";

  // Array for benchmark buttons | 3 toggleable data
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
      <div>
        <Graph passChildData1={data} passChildData2={vtsmx} />
      </div>
    </section>
  );
};

export default Result;
