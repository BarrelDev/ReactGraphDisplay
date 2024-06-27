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
import { useRef, useCallback } from "react";

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

  let chartRef = useRef(null);

  const downloadImage = useCallback(() => {
    if (chartRef.current != null) {
      const link = document.createElement("a");
      link.download = "chart.png";
      link.href = chartRef.current.toBase64Image();
      link.click();
    }
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={downloadImage}
      >
        Download
      </button>
      <Bar ref={chartRef} options={options} data={chartData} />
    </>
  );
}

export default BarChart;
