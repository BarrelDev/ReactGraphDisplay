interface StatBoxProp {
  stat_data: { count: number; mean: number; std: number };
}

const StatBox = ({ stat_data }: StatBoxProp) => {
  return (
    <div>
      <h3>
        count:<span className="badge text-bg-secondary">{stat_data.count}</span>
      </h3>
      <h3>
        mean:<span className="badge text-bg-secondary">{stat_data.mean}</span>
      </h3>
      <h3>
        std:<span className="badge text-bg-secondary">{stat_data.std}</span>
      </h3>
    </div>
  );
};

export default StatBox;
