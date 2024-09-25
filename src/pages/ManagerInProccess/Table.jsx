import { NavLink } from "react-router-dom";

export const Table = ({ data, owner }) => (
  <div class="table-block mb-5">
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th class="text-center">Замовник</th>
          <th class="text-center">Дедлайн</th>
          <th class="text-center">Предмет</th>
          <th class="text-center">Вид роботи</th>
          <th class="text-center">Тема роботи</th>
          <th class="text-center">Унікальність</th>
          <th class="text-center">Гарантії</th>
          <th class="text-center">Готові виконати</th>
          <th class="text-center">Автор</th>
          <th class="text-center">Ціна автора</th>
          <th class="text-center">Ціна замовника</th>
          <th class="text-center">Знижка</th>
          <th class="text-center">Примітка</th>
          <th class="text-center">Оплата</th>
          <th class="text-center">Статус</th>
          <th class="text-center">Керування</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(
          (
            {
              id,
              customer,
              deadline,
              topic,
              type,
              name,
              unique,
              garantee,
              readyToDo,
              author,
              price,
              authorPrice,
              discount,
              note,
              paid,
              status,
            },
            i
          ) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{customer}</td>
              <td>{deadline}</td>
              <td>{topic}</td>
              <td class="ellipsis">
                <span>{type}</span>
              </td>
              <td class="ellipsis">
                <span>
                  <NavLink
                    to={`/${owner ? "owner" : "manager"}-orders-topic`}
                    className="name"
                  >
                    {name}
                  </NavLink>
                </span>
              </td>
              <td>{unique}</td>
              <td>{garantee}</td>
              <td>{readyToDo}</td>
              <td>{author}</td>
              <td>{price}</td>
              <td>{authorPrice}</td>
              <td>{discount}</td>
              <td class="ellipsis">
                <span>{note}</span>
              </td>
              <td>{paid}</td>
              <td>
                <div class={`status ${status}`}>
                  {status === "success"
                    ? "Виконано"
                    : status === "pay"
                    ? "Очікує оплати"
                    : "В роботі"}
                </div>
              </td>
              <td>
                <NavLink to="/manager-in-proccess-manage" className="rate">
                  Упраління
                </NavLink>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);
