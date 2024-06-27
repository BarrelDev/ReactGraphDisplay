# ReactGraphDisplay

Uses JSON data to dynamically generate graphs using ChartJS.

Each component will use a specific JSON data structure to build charts. 

An example of this structure can be seen here:

```js
{
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
}
```

Run `npm run dev` if you would like to see the graphs generate.