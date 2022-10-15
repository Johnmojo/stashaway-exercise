interface Props {
  buttonTitle: string;
  buttonOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonStatus: string;
  buttonId?: string;
}

const Pill = ({
  buttonTitle,
  buttonOnClick,
  buttonStatus,
  buttonId
}: Props) => {
  return (
    <button
      onClick={buttonOnClick}
      id={buttonId}
      className={`inline-block px-3 py-1 mx-auto font-medium rounded-md font-akkurat text-stashaway-cyan ${
        buttonStatus === buttonId && "bg-stashaway-cyan !text-stashaway-white"
      }`}
    >
      {buttonTitle}
    </button>
  );
};

export default Pill;
