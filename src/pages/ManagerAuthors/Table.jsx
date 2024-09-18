export const Table = ({ data, onToggleSort }) => (
  <div class="table-block mb-5">
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">ФІО</th>
          <th class="text-center">Нік автора</th>
          <th class="text-center">Телефон</th>
          <th class="text-center">Телеграм</th>
          <th class="text-center">Рейтинг</th>
          <th class="text-center sort" onClick={onToggleSort}>
            Кількість завершених замовлень
          </th>
          <th class="text-center">Кількість скасованих замовлень</th>
          <th class="text-center">Кількість в роботі</th>
          <th class="text-center">Поставити оцінку</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(
          (
            {
              name,
              nickname,
              phone,
              telegram,
              rate,
              done,
              canceled,
              inProgress,
            },
            i
          ) => (
            <tr key={i}>
              <td>{name}</td>
              <td>{nickname}</td>
              <td>{phone}</td>
              <td>{telegram}</td>
              <td>{rate}</td>
              <td>{done}</td>
              <td>{canceled}</td>
              <td>{inProgress}</td>
              <td>
                <a href="" class="rate">
                  Поставити
                </a>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);
