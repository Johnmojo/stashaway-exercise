import { useState } from "react";
import TimeRow from "./TimeRow";
import CurrencyRow from "./CurrencyRow";

const Graph = () => {
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

  return (
    <section>
      <div className="flex w-full mx-auto py-14 max-w-screen-2xl place-content-between">
        <div className="space-x-3">
          <TimeRow timeInput={timeArray} />
        </div>
        <div className="space-x-3">
          <CurrencyRow currencyInput={currencyArray} />
        </div>
      </div>
      <div>GRAPH HERE</div>
    </section>
  );
};

export default Graph;
