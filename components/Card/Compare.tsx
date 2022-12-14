import { Dropdown } from "@components/index";

interface Props {
  compareInput: { value: string; label: string }[];
  passChildState: (data: string) => void;
}

const Compare = (props: Props) => {
  return (
    <div className="relative z-10 flex">
      <div className="w-[60%] p-12 bg-stashaway-lightGrey rounded-tl-md rounded-bl-md">
        <div className="flex flex-col space-y-2">
          <p className="font-semibold font-metropolis text-stashaway-blue">
            General Investing
          </p>
          <h3 className="text-xl font-bold font-metropolis text-stashaway-lightBlue">
            StashAway Risk Index 14%
          </h3>
        </div>
      </div>
      <div className="w-[40%] p-12 bg-stashaway-mediumGrey rounded-tr-md rounded-br-md">
        <Dropdown
          id="foreignBenchmark"
          options={props.compareInput}
          passChildState={props.passChildState}
        />
      </div>
      <div className="absolute top-0 bottom-0 left-[20%] right-0 flex items-center justify-center w-4 h-4 p-6 m-auto text-sm font-semibold rounded-full bg-stashaway-lightBlue font-metropolis text-stashaway-white">
        VS
      </div>
    </div>
  );
};

export default Compare;
