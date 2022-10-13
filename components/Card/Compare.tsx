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
    <div className="relative flex">
      <div className="w-1/2 p-12 bg-stashaway-lightGrey rounded-tl-md rounded-bl-md">
        <div className="flex flex-col space-y-2">
          <p className="font-semibold font-metropolis text-stashaway-blue">
            General Investing
          </p>
          <h3 className="text-lg font-bold font-metropolis text-stashaway-lightBlue">
            StashAway Risk Index 14%
          </h3>
        </div>
      </div>
      <div className="w-1/2 p-12 bg-stashaway-mediumGrey rounded-tr-md rounded-br-md">
        <Dropdown
          id="foreignBenchmark"
          options={foreignBenchmarkOption}
          selectValue={foreignBenchmark}
        />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-4 h-4 p-6 m-auto text-sm font-semibold rounded-full bg-stashaway-lightBlue font-metropolis text-stashaway-white">
        VS
      </div>
    </div>
  );
};

export default Compare;
