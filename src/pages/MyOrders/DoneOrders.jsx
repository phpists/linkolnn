import { NavLink } from "react-router-dom";

export const DoneOrders = ({ data }) => (
  <div className="table-block mb-5">
    <table className="table">
      <thead>
        <tr>
          <th className="text-center">ID</th>
          <th className="text-center">Дедлайн</th>
          <th className="text-center">Предмет</th>
          <th className="text-center">Вид роботи</th>
          <th className="text-center">Тема роботи</th>
          <th className="text-center">Кільк. сторінок</th>
          <th className="text-center">Унікальність</th>
          <th className="text-center">Ціна</th>
          <th>Гарантійн термін</th>
          <th className="text-center">Статус</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(
          (
            {
              id,
              date,
              topic,
              type,
              name,
              page_count,
              unique,
              price,
              garantee,
              note,
              status,
            },
            i
          ) => (
            <tr>
              <td>{id}</td>
              <td>{date}</td>
              <td>{topic}</td>
              <td>{type}</td>
              <td>
                <NavLink to="/my-orders-topic" className="name">
                  {name}
                </NavLink>
              </td>
              <td>{page_count}</td>
              <td>{unique}</td>
              <td>{price}</td>
              <td>{garantee}</td>
              <td>
                <div className={`status ${status}`}>
                  {status === "done"
                    ? "Виконано"
                    : status === "pay"
                    ? "Очікує оплати"
                    : "Завершено"}
                </div>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);
