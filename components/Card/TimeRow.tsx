import { useState, useRef } from "react";
import { Pill } from "@components/index";

interface Props {
  timeInput: { id: string; label: string }[];
  passChildState: (data: string) => void;
}

const Buttons = (props: Props) => {
  // Initialize and set first entry in the array as default
  const [active, setActive] = useState<string>(props.timeInput[0].id);

  // Keep track which button is selected & pass back to parent component
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.passChildState(event.currentTarget.id);
    setActive(event.currentTarget.id);
  };

  return (
    <>
      {props.timeInput.map((time) => (
        <Pill
          key={time.id}
          buttonTitle={time.label}
          buttonId={time.id}
          onClick={handleClick}
          buttonStatus={active}
        />
      ))}
    </>
  );
};

export default Buttons;
