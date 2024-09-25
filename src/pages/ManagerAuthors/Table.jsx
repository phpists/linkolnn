import { RateField } from "../../components/RateField";

export const Table = ({ data, onToggleSort }) => (
  <div class="table-block mb-5">
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">ФІО</th>
          <th class="text-center">Нік автора</th>
          <th class="text-center">Телефон</th>
          <th class="text-center">Телеграм</th>
          <th class="text-center sort" onClick={() => onToggleSort("rate")}>
            Рейтинг
          </th>
          <th class="text-center sort" onClick={() => onToggleSort("done")}>
            Кількість завершених замовлень
          </th>
          <th class="text-center sort" onClick={() => onToggleSort("canceled")}>
            Кількість скасованих замовлень
          </th>
          <th
            class="text-center sort"
            onClick={() => onToggleSort("inProgress")}
          >
            Кількість в роботі
          </th>
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
                <RateField title="Поставити" />
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);
