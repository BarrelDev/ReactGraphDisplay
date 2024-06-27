import "./App.css";

import BarChart from "./components/BarChart";
import SingleLineChart from "./components/SingleLineChart";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  let jsonData = {
    chart_data: {
      class_dist: { labels: ["A", "B"], values: [30, 70] },
      stat_dist: { labels: [0, 1, 2, 3, 4, 5], values: [0, 1, 0, 2, 2, 5] },
      class_based_dist: [
        { classname: "A", data: { "0": 1, "1": 2, "3": 4, "4": 5 } },
        { classname: "B", data: { "0": 1, "1": 2, "3": 2, "4": 2 } },
      ],
    },
    stat_data: { count: 5, mean: 3, std: 2 },
    stat_by_class: {
      count: { A: 5, B: 4 },
      mean: { A: 3, B: 2 },
      std: { A: 2, B: 1 },
    },
  };

  let colTitles = ["#", "First", "Last"];

  let rows = [
    ["1", "Visvam", "Rajesh"],
    ["2", "Vibhu", "Rajesh"],
  ];

  return (
    <>
      <Navbar title="Graphs" />
      <BarChart
        title="class_dist"
        labels={jsonData.chart_data.class_dist.labels}
        values={jsonData.chart_data.class_dist.values}
      />
      <SingleLineChart
        title="stat_dist"
        labels={jsonData.chart_data.stat_dist.labels.map((item) =>
          item.toString()
        )}
        values={jsonData.chart_data.stat_dist.values}
      />

      <Table colTitles={colTitles} rows={rows} />
    </>
  );
}

export default App;
