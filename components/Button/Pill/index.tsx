interface Props {
  buttonTitle: string;
  buttonId: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonStatus: string;
}

const Pill = ({ buttonTitle, buttonId, onClick, buttonStatus }: Props) => {
  return (
    <button
      id={buttonId}
      onClick={onClick}
      className={`inline-block px-3 py-1.5 mx-auto rounded-md font-akkurat text-stashaway-cyan ${
        buttonStatus === buttonId && "bg-stashaway-cyan !text-stashaway-white"
      }`}
    >
      {buttonTitle}
    </button>
  );
};

export default Pill;
