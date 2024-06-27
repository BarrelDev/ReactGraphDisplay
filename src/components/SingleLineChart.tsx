import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SingleLineChartProp {
  title: string;
  yAxis?: string;
  labels: string[];
  values: number[];
}

const SingleLineChart = ({
  title,
  yAxis = "",
  labels,
  values,
}: SingleLineChartProp) => {
  let data = {
    labels,
    datasets: [
      {
        label: yAxis,
        data: values,
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default SingleLineChart;
