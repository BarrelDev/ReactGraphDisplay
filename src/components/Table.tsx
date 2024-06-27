interface TableProps {
  colTitles: string[];
  rows: string[][];
}

const Table = ({ colTitles, rows }: TableProps) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {colTitles.map((title) => (
              <th scope="col">{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr>
              {row.map((item, index) => (
                <>
                  {index == 0 ? <th scope="row">{item}</th> : <td>{item}</td>}
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
