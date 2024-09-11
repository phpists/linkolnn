import { NavLink } from "react-router-dom";

export const Table = ({ data }) => (
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
          <th>Гарантійн термін</th>
          <th>Готові виконати</th>
          <th className="text-center">Примітки</th>
          <th className="text-center">Керування</th>
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
              garantee,
              readyToDo,
              note,
            },
            i
          ) => (
            <tr key={i}>
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
              <td>{garantee}</td>
              <td>{readyToDo}</td>
              <td> {note}</td>
              <td>
                <a href="" className="rate">
                  Керувати
                </a>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);
