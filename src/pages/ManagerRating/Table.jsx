import { NavLink } from "react-router-dom";

export const Table = ({ data }) => (
  <div class="table-block mb-5">
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th class="text-center">Замовник</th>
          <th class="text-center">Менеджер</th>
          <th class="text-center">Дедлайн</th>
          <th class="text-center">Предмет</th>
          <th class="text-center">Вид роботи</th>
          <th class="text-center">Тема роботи</th>
          <th class="text-center">Унікальність</th>
          <th class="text-center">Гарантії</th>
          <th class="text-center">Готові виконати</th>
          <th class="text-center">Ціна замовника</th>
          <th class="text-center">Знижка</th>
          <th class="text-center">Примітка</th>
          <th class="text-center">Оплата</th>
          <th class="text-center">Керування</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(
          (
            {
              id,
              customer,
              manager,
              deadline,
              topic,
              type,
              name,
              unique,
              garantee,
              readyToDo,
              price,
              discount,
              note,
              payment,
            },
            i
          ) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{customer}</td>
              <td>{manager}</td>
              <td>{deadline}</td>
              <td>{topic}</td>
              <td class="ellipsis">
                <span>{type}</span>
              </td>
              <td class="ellipsis">
                <span>
                  <NavLink to="/my-orders-topic" className="name">
                    {name}
                  </NavLink>
                </span>
              </td>
              <td>{unique}</td>
              <td>
                <span class="nowrap">{garantee}</span>
              </td>
              <td>{readyToDo}</td>
              <td>{price}</td>
              <td>{discount}</td>
              <td class="ellipsis">
                <span>{note}</span>
              </td>
              <td>
                <div class="status pay">Очікується</div>
              </td>
              <td>
                <NavLink to="/manager-manage" className="rate">
                  Управління
                </NavLink>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);
