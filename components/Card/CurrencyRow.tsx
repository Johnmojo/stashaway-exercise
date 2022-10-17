import { useState } from "react";
import { Pill } from "@components/index";

interface Props {
  currencyInput: { id: string; label: string }[];
  passChildState: (data: string) => void;
}

const CurrencyRow = (props: Props) => {
  // Initliaze and select from the first entry in the array
  const [button, setButton] = useState<string>(props.currencyInput[0].id);

  // Keep track which button is selected & pass back to parent component
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.passChildState(event.currentTarget.id);
    setButton(event.currentTarget.id);
  };

  return (
    <>
      {props.currencyInput.map((currency) => (
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
