interface TableProps {
  classTitles: string[];
  stat_by_class: {
    count: {
      A: number;
      B: number;
    };
    mean: {
      A: number;
      B: number;
    };
    std: {
      A: number;
      B: number;
    };
  };
}

const Table = ({ classTitles, stat_by_class }: TableProps) => {
  return (
    <>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {classTitles.map((title) => (
              <th scope="col">{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">count</th>
            <td>{stat_by_class.count.A}</td>
            <td>{stat_by_class.count.B}</td>
          </tr>
          <tr>
            <th scope="row">mean</th>
            <td>{stat_by_class.mean.A}</td>
            <td>{stat_by_class.mean.B}</td>
          </tr>
          <tr>
            <th scope="row">std</th>
            <td>{stat_by_class.std.A}</td>
            <td>{stat_by_class.std.B}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
