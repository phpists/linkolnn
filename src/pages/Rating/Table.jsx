export const Table = ({ data }) => (
  <div className="table-block mb-3">
    <table className="table table-three-column">
      <thead>
        <tr>
          <th className="text-center">
            <span>ID</span>
          </th>
          <th className="text-center">
            <span>Комментар</span>
          </th>
          <th className="text-center">
            <span>Оцінка</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, comment, rate }, i) => (
          <tr key={i}>
            <td>{id}</td>
            <td>{comment}</td>
            <td>{rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
