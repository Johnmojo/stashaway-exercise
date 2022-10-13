import { useState, useEffect, useRef } from "react";

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
      className={`border-2 rounded-sm py-4 border-stashaway-mediumGrey relative ${
        toggle && "before:-translate-x-1/3 before:-translate-y-1/2"
      }`}
      id={id}
      name={id}
      ref={ref}
      value={option.toLowerCase()}
      onClick={() => setToggle(!toggle)}
    >
      <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
        {option}
      </span>
      <ul
        className={`opacity-0 absolute w-full mt-6 ${
          toggle &&
          "!opacity-100 pointer-events-auto origin-top scale-100 translate-y-0"
        }`}
      >
        {options.map((option, id) => (
          <li
            className={`p-4 cursor-auto text-left select-none ${
              option.value === focus && "text-stashaway-blue bg-stashaway-cyan"
            }`}
            key={id}
            data-value={option.value}
            data-label={option.label}
            onClick={handleClickInner}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
