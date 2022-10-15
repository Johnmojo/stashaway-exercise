import useFetch from "@hooks/useFetch";
import { Graph, CurrencyRow, TimeRow } from "@components/index";

const Result = () => {
  // Import a custom hook to fetch data
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?&_limit=5"
  );

  // Verify if its working
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

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
      <div className="flex w-full pb-8 mx-auto pt-14 max-w-screen-2xl place-content-between">
        <div className="space-x-3">
          <TimeRow timeInput={timeArray} />
        </div>
        <div className="space-x-3">
          <CurrencyRow currencyInput={currencyArray} />
        </div>
      </div>
      <div>
        <Graph />
      </div>
    </section>
  );
};

export default Result;
