import { Line } from "react-chartjs-2";

interface Props {
  data: {
    id: number;
    year: number;
    userGain: number;
    userLost: number;
  }[];
}

const LineChart = ({ data }: Props) => {
  return <section></section>;
};

export default LineChart;
