import { useState, useEffect, useRef } from "react";
import { ArrowDropdown } from "@components/index";

interface Props {
  options: Array<{ label: string; value: string }>;
  id: string;
  selectValue: string;
}

const Dropdown = ({ options, id, selectValue }: Props) => {
  const [toggle, setToggle] = useState(false);
  const [option, setOption] = useState(options[0].label);
  const [focus, setFocus] = useState(options[0].value);
  const ref = useRef();

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setToggle(false);
    }
  };

  const handleClickInner = (e) => {
    const label = e.target.getAttribute("data-label");
    const value = e.target.getAttribute("data-value");
    setOption(label);
    setFocus(value);
    // selectValue({
    //   name: id,
    //   value
    // });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div
      className={`border rounded-md border-stashaway-blackGrey select-none text-stashaway-darkGrey font-akkurat bg-stashaway-white relative cursor-pointer ${
        toggle &&
        "before:-translate-x-1/3 before:-translate-y-1/2 rounded-b-none"
      }`}
      id={id}
      name={id}
      ref={ref}
      value={option.toLowerCase()}
      onClick={() => setToggle(!toggle)}
    >
      <span className="flex items-center px-6 py-4 overflow-hidden text-ellipsis whitespace-nowrap place-content-between">
        <div>{option}</div>
        <div
          className={`w-5 h-5 fill-stashaway-cyan ${toggle && "rotate-180"}`}
        >
          <ArrowDropdown />
        </div>
      </span>
      <ul
        className={`border border-stashaway-blackGrey opacity-0 absolute w-full bg-stashaway-white pointer-events-none  ${
          toggle && "!opacity-100 pointer-events-auto rounded-b-md"
        }`}
      >
        <div className="m-4">
          {options.map((option, id) => (
            <li
              className={`px-4 py-4 text-left select-none cursor-pointer text-stashaway-blue hover:bg-stashaway-mediumGrey ${
                option.value === focus &&
                " !bg-stashaway-lightGrey text-stashaway-darkGrey"
              }`}
              key={id}
              data-value={option.value}
              data-label={option.label}
              onClick={handleClickInner}
            >
              {option.label}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Dropdown;
