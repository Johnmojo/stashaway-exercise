import { useState } from "react";
import Pill from "../Button/Pill";

interface Props {
  currencyInput: { id: string; label: string }[];
}

const CurrencyRow = ({ currencyInput }: Props) => {
  // Initliaze and select from the first entry in the array
  const [button, setButton] = useState<string>(currencyInput[0].id);

  // Keep track which button is selected
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setButton(event.currentTarget.id);
  };

  return (
    <>
      {currencyInput.map((currency) => (
        <Pill
          key={currency.id}
          buttonTitle={currency.label}
          buttonId={currency.id}
          onClick={handleClick}
          buttonStatus={button}
        />
      ))}
    </>
  );
};

export default CurrencyRow;
