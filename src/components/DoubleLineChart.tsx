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
import { useCallback, useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DoubleLineChartProp {
  title: string;
  firstLine?: string;
  secondLine?: string;
  labels: string[];
  valueSetOne: number[];
  valueSetTwo: number[];
}

const DoubleLineChart = ({
  title,
  firstLine = "",
  secondLine = "",
  labels,
  valueSetOne,
  valueSetTwo,
}: DoubleLineChartProp) => {
  let data = {
    labels,
    datasets: [
      {
        id: 1,
        label: firstLine,
        data: valueSetOne,
        borderColor: "rgb(240, 27, 12)",
      },
      {
        id: 2,
        label: secondLine,
        data: valueSetTwo,
        borderColor: "rgb(0, 102, 255)",
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
      <Line ref={chartRef} options={options} data={data} />
    </>
  );
};

export default DoubleLineChart;
