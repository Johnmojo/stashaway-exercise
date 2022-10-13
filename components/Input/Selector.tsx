import { useState, useEffect, useRef } from "react";

interface Props {
  options: Array<{ label: string; value: string }>;
  id: string;
  selectValue: (value: { name: string; value: string }) => void;
}

const Selector = ({ options, id, selectValue }: Props) => {
  const [toggle, setToggle] = useState(false);
  const [option, setOption] = useState(options[0].label);
  const [focus, setFocus] = useState(options[0].value);
  const ref = useRef();

  return <div> Dummy </div>;
};

export default Selector;
