import useFetch from "@hooks/useFetch";
import { Compare, Graph, CurrencyRow, TimeRow } from "@components/index";
const API_KEY = process.env.API_KEY;

// Temp data
import { UserData } from "../../data/UserData";

const Result = () => {
  const rangeDayAPI = "TIME_SERIES_DAILY";
  const rangeWeekAPI = "TIME_SERIES_WEEKLY";
  const rangeMonthAPI = "TIME_SERIES_MONTHLY";

  // Import a custom hook to fetch data
  // const { loading, error, data } = useFetch(
  //   "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=VTI&datatype=json&apikey=" +
  //     API_KEY
  // );

  // // Verify if its working
  // if (loading) return <h1>Loading</h1>;
  // if (error) return <h1>Error</h1>;

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
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" }
  ];

  return (
    <section>
      <div>
        <Compare compareInput={benchmarkArray} />
      </div>
      <div className="flex w-full pb-4 mx-auto pt-14 max-w-screen-2xl place-content-between">
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
