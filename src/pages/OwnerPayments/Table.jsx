export const Table = ({ data }) => (
  <div class="table-block mb-5">
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th class="text-center">Замовник</th>
          <th class="text-center">Менеджер</th>
          <th class="text-center">Автор</th>
          <th class="text-center">Кільк. завершених проектів</th>
          <th class="text-center">Ціна Автора</th>
          <th class="text-center">Ціна замовника</th>
          <th class="text-center">Оплата Замовника</th>
          <th class="text-center">Гарантійни термін</th>
          <th class="text-center">Кінець гарантійного терміну</th>
          <th class="text-center">Статус</th>
          <th class="text-center">Профіт</th>
          <th class="text-center">Картка</th>
          <th class="text-center">Виплата</th>
          <th class="text-center">Завршити проект</th>
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
              done,
              price,
              authorPrice,
              paid,
              garentee,
              endGarantee,
              status,
              profit,
              card,
              pay,
            },
            i
          ) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{customer}</td>
              <td>{manager}</td>
              <td>{author}</td>
              <td>{done}</td>
              <td>{authorPrice}</td>
              <td>{price}</td>
              <td>{paid}</td>
              <td>{garentee}</td>
              <td>{endGarantee}</td>
              <td>
                <div class="status pay">На виплату</div>
              </td>
              <td>{profit}</td>
              <td class="ellipsis">
                <span>{card}</span>
              </td>
              <td>
                <div class="custom-switch">
                  <input type="checkbox" name="pay" id="pay" />
                  <label for="pay"></label>
                </div>
              </td>
              <td>
                <div class="custom-checkbox single">
                  <input type="checkbox" name="end" id="end" />
                  <label for="end"></label>
                </div>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);
