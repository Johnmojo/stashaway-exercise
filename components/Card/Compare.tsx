import { useState } from "react";
import Dropdown from "../Input/Dropdown";

const Compare = () => {
  const [listing, setListing] = useState({
    foreignBenchmark: ""
  });

  const { foreignBenchmark } = listing;

  // Feed the Dropdown
  const foreignBenchmarkOption = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" }
  ];

  return (
    <div>
      <div>
        <p>General Investing</p>
        <h3>StashAway Risk Index 14%</h3>
      </div>
      <div>
        <Dropdown
          id="foreignBenchmark"
          options={foreignBenchmarkOption}
          selectValue={foreignBenchmark}
        />
      </div>
    </div>
  );
};

export default Compare;
