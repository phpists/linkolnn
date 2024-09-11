export const Table = ({ data }) => (
  <div class="table-block mb-5">
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">
            <span>ID</span>
          </th>
          <th class="text-center">
            <span>Замовник</span>
          </th>
          <th class="text-center">
            <span>Менеджер</span>
          </th>
          <th class="text-center">
            <span>Автор</span>
          </th>
          <th class="text-center">
            <span>Ціна Автора</span>
          </th>
          <th class="text-center">
            <span>Профіт</span>
          </th>
          <th class="text-center">
            <span>Статус</span>
          </th>
          <th class="text-center">
            <span>Дата закриття</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(
          (
            {
              id,
              customer,
              manager,
              author,
              authorPrice,
              status,
              profit,
              date,
            },
            i
          ) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{customer}</td>
              <td>{manager}</td>
              <td>{author}</td>
              <td>{authorPrice}</td>
              <td>{profit}</td>
              <td>
                <div class="status end">Завершено</div>
              </td>
              <td>{date}</td>
            </tr>
          )
        )}
      </tbody>
      <tfoot>
        <tr>
          <td>Всього</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>1200</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
);
