export const Table = ({ data }) => (
  <div class="table-block mb-4">
    <table class="table table-layout-fixed">
      <thead>
        <tr>
          <th class="text-center">
            <span>Автор</span>
          </th>
          <th class="text-center">
            <span>Замовлення в роботі від автора</span>
          </th>
          <th class="text-center">
            <span>Рейтинг</span>
          </th>
          <th class="text-center">
            <span>Ціна автора</span>
          </th>
          <th class="text-center">
            <span>Керування</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ id, author, inProgress, rate, price }, i) => (
          <tr key={i}>
            <td>{author}</td>
            <td>{inProgress}</td>
            <td>{rate}</td>
            <td>{price}</td>
            <td>
              <div class="custom-checkbox">
                <input type="checkbox" name="id1" id="id1" checked />
                <label for="id1">Обрати</label>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
