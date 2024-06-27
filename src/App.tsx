import "./App.css";

import BarChart from "./components/BarChart";
import SingleLineChart from "./components/SingleLineChart";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import StatBox from "./components/StatBox";
import DoubleLineChart from "./components/DoubleLineChart";

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

  let colTitles = ["", "A", "B"];

  const dictToArray = (dictionary: {
    "0": number;
    "1": number;
    "3": number;
    "4": number;
  }) => {
    return [dictionary[0], dictionary[1], dictionary[3], dictionary[4]];
  };

  return (
    <div className="align-middle">
      <Navbar title="Graphs" />

      <div className="container-fluid overflow-hidden text-center">
        <div className="row mb-3">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <BarChart
                  title="class_dist"
                  labels={jsonData.chart_data.class_dist.labels}
                  values={jsonData.chart_data.class_dist.values}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <StatBox stat_data={jsonData.stat_data} />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <SingleLineChart
                  title="stat_dist"
                  labels={jsonData.chart_data.stat_dist.labels.map((item) =>
                    item.toString()
                  )}
                  values={jsonData.chart_data.stat_dist.values}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <DoubleLineChart
                  title="class_based_dist"
                  firstLine={jsonData.chart_data.class_based_dist[0].classname}
                  secondLine={jsonData.chart_data.class_based_dist[1].classname}
                  labels={["0", "1", "3", "4"]}
                  valueSetOne={dictToArray(
                    jsonData.chart_data.class_based_dist[0].data
                  )}
                  valueSetTwo={dictToArray(
                    jsonData.chart_data.class_based_dist[1].data
                  )}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <Table
                  classTitles={colTitles}
                  stat_by_class={jsonData.stat_by_class}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
