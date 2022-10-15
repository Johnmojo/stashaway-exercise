import { useState } from "react";
import Pill from "../Button/Pill";

interface Props {
  timeInput: { id: string; label: string }[];
}

const Buttons = ({ timeInput }: Props) => {
  // Initialize and set first entry in the array as default
  const [active, setActive] = useState<string>(timeInput[0].id);

  // Mutate state based on props returns (selected button)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActive(event.currentTarget.id);
  };

  return (
    <>
      {timeInput.map((time) => (
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
