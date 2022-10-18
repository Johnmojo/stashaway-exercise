import React, { useState, useEffect, useRef } from "react";
import { ArrowDropdown } from "@components/index";

interface Props {
  options: Array<{ label: string; value: string }>;
  id: string;
  passChildState: (value: string) => void;
}

const Dropdown = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  const [option, setOption] = useState(props.options[0].label);
  const [focus, setFocus] = useState(props.options[0].value);
  const dropdownRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (!dropdownRef.current?.contains(e.target as Node)) {
      setToggle(false);
    }
  };

  const handleClickInner = (e: MouseEvent | any) => {
    const label = (e.target as HTMLTextAreaElement).getAttribute("data-label");
    const value = (e.target as HTMLTextAreaElement).getAttribute("data-value");
    setOption(label as string);
    setFocus(value as string);

    // Prevent page jump
    e.preventDefault();

    // Pass back the value to parent component
    props.passChildState(value?.toString() as string);
  };

  // Check if clicked on outside of element
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
      id={props.id}
      ref={dropdownRef}
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
          {props.options.map((option, id) => (
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
