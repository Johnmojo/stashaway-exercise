import { useState } from "react";
import Pill from "../Button/Pill";

const Graph = () => {
  const [button, setButton] = useState<string>("1m");

  // Keep track which button is selected
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setButton(event.currentTarget.id);
  };

  return (
    <section>
      <div className="flex w-full mx-auto py-14 max-w-screen-2xl place-content-between">
        <div className="space-x-3">
          <Pill
            buttonTitle="1 month"
            buttonId={"1m"}
            buttonOnClick={handleClick}
            buttonStatus={button}
          />
          <Pill
            buttonTitle="6 months"
            buttonId={"6m"}
            buttonOnClick={handleClick}
            buttonStatus={button}
          />
          <Pill
            buttonTitle="Year-to-date"
            buttonId={"ytd"}
            buttonOnClick={handleClick}
            buttonStatus={button}
          />
          <Pill
            buttonTitle="1 year"
            buttonId={"1y"}
            buttonOnClick={handleClick}
            buttonStatus={button}
          />
          <Pill
            buttonTitle="5 year"
            buttonId={"5y"}
            buttonOnClick={handleClick}
            buttonStatus={button}
          />
          <Pill
            buttonTitle="Max"
            buttonId={"max"}
            buttonOnClick={handleClick}
            buttonStatus={button}
          />
        </div>
        <div className="space-x-3"></div>
      </div>
      <div>GRAPH HERE</div>
    </section>
  );
};

export default Graph;
