import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProp {
  title: string;
  labels: string[];
  values: number[];
  yAxis?: string;
}

function BarChart({ title, labels, values, yAxis = "" }: BarChartProp) {
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

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: yAxis,
        data: values,
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={chartData} />
    </>
  );
}

export default BarChart;
